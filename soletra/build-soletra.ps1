# Gera soletra/aceitas.js e soletra/puzzles.js a partir de .cache/lexico.txt + .cache/icf.txt + contexto/vocab.js
# powershell -ExecutionPolicy Bypass -File soletra\build-soletra.ps1
param([double]$Acc = 17, [double]$Com = 14.2, [double]$ComVocab = 15, [int]$Min = 25, [int]$Max = 60, [int]$Want = 800, [switch]$DryRun, [string]$Dump = $null)
$root = Split-Path $PSScriptRoot -Parent
Add-Type -TypeDefinition @'
using System; using System.IO; using System.Text; using System.Linq; using System.Collections.Generic; using System.Globalization;
public static class Sol {
  class W { public string k, d; public double f; public int m; public bool voc; }
  static string Norm(string s){ var d = s.Normalize(NormalizationForm.FormD); var sb=new StringBuilder(); foreach(char c in d){ if (CharUnicodeInfo.GetUnicodeCategory(c)!=UnicodeCategory.NonSpacingMark) sb.Append(c);} return sb.ToString(); }
  static bool IsPlural(string k, HashSet<string> lex){
    if (!k.EndsWith("s")) return false;
    Func<int,string,bool> h = (cut, add) => k.Length-cut >= 2 && lex.Contains(k.Substring(0, k.Length-cut)+add);
    if (h(1,"")) return true;
    if (k.EndsWith("as") && h(2,"o")) return true;
    if (k.EndsWith("oes") || k.EndsWith("aes")) return h(3,"ao");
    if (k.EndsWith("ais")) return h(3,"al");
    if (k.EndsWith("eis")) return h(3,"el") || h(3,"il");
    if (k.EndsWith("ois")) return h(3,"ol");
    if (k.EndsWith("uis")) return h(3,"ul");
    if (k.EndsWith("ns")) return h(2,"m");
    if (k.EndsWith("es")) return h(2,"");
    return false;
  }
  static int Pop(int x){ int n=0; while(x!=0){ x&=x-1; n++; } return n; }
  static int Mask(string k){ int m=0; foreach(char c in k) m|=1<<(c-'a'); return m; }
  static string Letters(int m){ var sb=new StringBuilder(); for(int i=0;i<26;i++) if((m>>i&1)!=0) sb.Append((char)('a'+i)); return sb.ToString(); }
  public static string Run(string root, double acc, double com, double comVocab, int mn, int mx, int want, bool dry, string dumpPath){
    string cache = Path.Combine(root,".cache");
    var icf = new Dictionary<string,double>();
    foreach (var l in File.ReadLines(Path.Combine(cache,"icf.txt"), Encoding.UTF8)){ int i=l.LastIndexOf(','); if(i<=0) continue; double v; if(double.TryParse(l.Substring(i+1), NumberStyles.Float, CultureInfo.InvariantCulture, out v)) icf[l.Substring(0,i)]=v; }
    string vt = File.ReadAllText(Path.Combine(root,"contexto","vocab.js"), Encoding.UTF8);
    int a = vt.IndexOf('"'), b = vt.IndexOf('"', a+1);
    var vocab = new HashSet<string>(vt.Substring(a+1, b-a-1).Split('|'));
    var block = new HashSet<string>(File.ReadAllText(Path.Combine(root,"soletra","bloqueio.txt"), Encoding.UTF8).Split(new[]{' ','\n','\r','\t'}, StringSplitOptions.RemoveEmptyEntries).Select(Norm));
    var forbid = new HashSet<string>(File.ReadAllText(Path.Combine(root,"soletra","proibidas.txt"), Encoding.UTF8).Split((string[])null, StringSplitOptions.RemoveEmptyEntries).Select(Norm));
    foreach (var f0 in forbid) block.Add(f0);
    var byKey = new Dictionary<string,W>();
    var lexAll = new HashSet<string>(File.ReadLines(Path.Combine(cache,"lexico.txt"), Encoding.UTF8).Select(s=>Norm(s.Trim())));
    int kwy = 1<<('k'-'a') | 1<<('w'-'a') | 1<<('y'-'a');
    foreach (var w0 in File.ReadLines(Path.Combine(cache,"lexico.txt"), Encoding.UTF8)){
      string w = w0.Trim().Normalize(NormalizationForm.FormC); string k = Norm(w);
      if (k.Length<4) continue; bool ok=true; foreach(char c in k) if(c<'a'||c>'z'){ok=false;break;} if(!ok) continue;
      double f; if(!icf.TryGetValue(w0.Trim(), out f) && !icf.TryGetValue(w, out f)) continue;
      if (f >= acc) continue;
      int m = Mask(k); if (Pop(m)>7 || (m & kwy)!=0) continue;
      if (forbid.Contains(k)) continue;
      bool voc = vocab.Contains(w);
      W e; if (byKey.TryGetValue(k, out e)){ if (voc) e.voc = true; if (f < e.f){ e.f=f; e.d=w; } continue; }
      byKey[k] = new W{ k=k, d=w, f=f, m=m, voc=voc };
    }
    var all = byKey.Values.OrderBy(x=>x.k, StringComparer.Ordinal).ToList();
    var fr = new System.Text.RegularExpressions.Regex("(th|sh|ck|tt|ll|pp|ff|dd|gg|bb|mm|nn|ph|oo$|ee$|[bcdfghjpqtv]$|ng$)");
    Func<string,bool> ptpt = kk => { for (int i=1;i<kk.Length;i++){ if (kk[i]=='t' && (kk[i-1]=='c'||kk[i-1]=='p') && lexAll.Contains(kk.Remove(i-1,1))) return true; if (kk[i]=='c' && kk[i-1]=='p' && lexAll.Contains(kk.Remove(i-1,1))) return true; } return false; };
    var common = all.Where(x => !block.Contains(x.k) && !ptpt(x.k) && x.voc && x.f < comVocab && !fr.IsMatch(x.k) && !IsPlural(x.k, lexAll)).ToList();
    if (!string.IsNullOrEmpty(dumpPath)) File.WriteAllLines(dumpPath, common.Select(x=>x.d+" "+x.f.ToString("0.0", CultureInfo.InvariantCulture)), new UTF8Encoding(false));
    int V = 0; foreach(char c in "aeiou") V |= 1<<(c-'a');
    var sb = new StringBuilder();
    sb.AppendLine("aceitas="+all.Count+" comuns="+common.Count);
    // candidatos a pangrama: palavra comum e bem conhecida com 7 letras distintas
    var pans = common.Where(x => Pop(x.m)==7 && x.f < com - 0.7 && !x.k.Contains('q') || (Pop(x.m)==7 && x.k.Contains("qu") && x.f < com-0.7)).GroupBy(x=>x.m).ToList();
    sb.AppendLine("conjuntos pangrama="+pans.Count);
    var rnd = new Random(20260101);
    var puzzles = new List<Tuple<int,int,List<W>,int>>();
    foreach (var g in pans){
      int m = g.Key; int nv = Pop(m & V); if (nv < 2 || nv > 4) continue;
      var fit = common.Where(x => (x.m & ~m)==0).ToList();
      int bestC=-1, bestScore=int.MaxValue; List<W> bestL=null;
      for (int i=0;i<26;i++){ if((m>>i&1)==0) continue;
        var L = fit.Where(x => (x.m>>i&1)!=0).ToList();
        if (L.Count < mn || L.Count > mx) continue;
        int score = Math.Abs(L.Count-40)*10 + rnd.Next(60); // prefere ~40, com variedade de letra central
        if (score < bestScore){ bestScore=score; bestC=i; bestL=L; }
      }
      if (bestC<0) continue;
      puzzles.Add(Tuple.Create(m, bestC, bestL, g.Count()));
    }
    sb.AppendLine("puzzles validos="+puzzles.Count);
    // embaralha de forma fixa e corta
    var sel = puzzles.OrderBy(x=>rnd.Next()).Take(want).ToList();
    var hist = sel.GroupBy(p=>p.Item3.Count/5*5).OrderBy(x=>x.Key).Select(x=>x.Key+":"+x.Count());
    sb.AppendLine("respostas: "+string.Join(" ",hist));
    var cent = sel.GroupBy(p=>(char)('a'+p.Item2)).OrderByDescending(x=>x.Count()).Select(x=>x.Key+":"+x.Count());
    sb.AppendLine("centro: "+string.Join(" ",cent));
    foreach (var p in sel.Take(6)) sb.AppendLine(Letters(p.Item1)+" ["+(char)('a'+p.Item2)+"] "+p.Item3.Count+": "+string.Join(" ", p.Item3.Select(x=>x.d)));
    if (dry) return sb.ToString();
    var enc = new UTF8Encoding(false);
    var o = new StringBuilder();
    o.Append("/* Soletra: palavras aceitas (lemas do lexico, icf<"+acc.ToString(CultureInfo.InvariantCulture)+", so as que cabem em 7 letras sem k/w/y). Gerado por build-soletra.ps1 */\n");
    o.Append("window.SOLETRA_ACEITAS=\""); o.Append(string.Join("|", all.Select(x=>x.d))); o.Append("\".split(\"|\");\n");
    File.WriteAllText(Path.Combine(root,"soletra","aceitas.js"), o.ToString(), enc);
    var q = new StringBuilder();
    q.Append("/* Soletra: "+sel.Count+" desafios. letras = as 7 letras (sem acento); centro = letra obrigatoria; respostas = palavras comuns (com acento). Gerado por build-soletra.ps1 */\nwindow.SOLETRA=[\n");
    for (int i=0;i<sel.Count;i++){ var p=sel[i];
      q.Append("{letras:'"+Letters(p.Item1)+"',centro:'"+(char)('a'+p.Item2)+"',respostas:'"+string.Join(" ", p.Item3.Select(x=>x.d))+"'.split(' ')}"+(i<sel.Count-1?",":"")+"\n"); }
    q.Append("];\n");
    File.WriteAllText(Path.Combine(root,"soletra","puzzles.js"), q.ToString(), enc);
    return sb.ToString();
  }
}
'@
[Sol]::Run($root, $Acc, $Com, $ComVocab, $Min, $Max, $Want, [bool]$DryRun, $Dump)

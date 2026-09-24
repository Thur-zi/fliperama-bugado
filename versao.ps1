# Troca o número de versão (?v=...) de todos os arquivos que as páginas carregam.
# Rode antes de subir mudanças, pra ninguém pegar página nova com script velho do cache:
#   powershell -ExecutionPolicy Bypass -File versao.ps1
$v = Get-Date -Format 'yyMMddHHmm'
$utf8 = New-Object Text.UTF8Encoding $false
Get-ChildItem -Path $PSScriptRoot -Filter index.html -Recurse -Depth 1 | ForEach-Object {
  $t = [IO.File]::ReadAllText($_.FullName, $utf8)
  $n = [Text.RegularExpressions.Regex]::Replace($t, '\?v=\d+', "?v=$v")
  if ($n -ne $t) { [IO.File]::WriteAllText($_.FullName, $n, $utf8); Write-Host "$($_.FullName.Substring($PSScriptRoot.Length+1)) -> v=$v" }
}

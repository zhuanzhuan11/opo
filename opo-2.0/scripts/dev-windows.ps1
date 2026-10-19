$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath (Join-Path $PSScriptRoot '..')

$fnm = Get-Command fnm -ErrorAction SilentlyContinue
if ($null -ne $fnm) {
    fnm env --shell powershell | Out-String | Invoke-Expression
    fnm use 24.18.1
}

node scripts/dev-handoff.mjs @args
exit $LASTEXITCODE

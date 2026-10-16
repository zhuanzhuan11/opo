$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath (Join-Path $PSScriptRoot '..')
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Install Node.js 24.18.1 from nodejs.org first.' }
Write-Host 'Open http://127.0.0.1:3200 after startup. Ctrl+C stops the server.'
node backend/server.mjs

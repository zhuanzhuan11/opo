#!/bin/bash
set -e
cd "$(dirname "$0")/.."
if ! command -v node >/dev/null 2>&1; then
  echo "Please install Node.js 24.18.1 or a compatible Node.js 24 release from nodejs.org."
  exit 1
fi
echo "Open http://127.0.0.1:3200 after the server starts. Ctrl+C stops the server."
node backend/server.mjs


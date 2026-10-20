#!/bin/zsh
set -eu

cd "${0:A:h}/.."
if command -v fnm >/dev/null 2>&1; then
  eval "$(fnm env --shell zsh)"
  fnm use 24.18.1
fi
exec node scripts/dev-handoff.mjs "$@"

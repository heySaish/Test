
#!/usr/bin/env bash

set -e

echo "🚀 Installing Antigravity CLI..."

curl -fsSL https://antigravity.google/cli/install.sh | bash

echo "✅ Antigravity CLI installed!"

echo
echo "📦 Cloning Crest-IDE..."

git clone https://github.com/Crest-IDE/Crest-IDE.git

echo
echo "📦 Cloning VS Code..."

git clone https://github.com/microsoft/vscode.git

echo
echo "🎉 Setup completed!"
echo
echo "Repositories:"
echo "  - Crest-IDE/"
echo "  - vscode/"


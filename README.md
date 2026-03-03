# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Quick Download

**Direct Download Links:**
- 🍎 **macOS (Apple Silicon)**: [Download Builder.io-0.3.9-arm64.dmg](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.3.9-alpha/Builder.io-0.3.9-arm64.dmg)
- 🍎 **macOS (Intel)**: [Download Builder.io-0.3.9.dmg](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.3.9-alpha/Builder.io-0.3.9.dmg)  
- 🪟 **Windows**: [Download BuilderInstaller.exe](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.3.9-alpha/BuilderInstaller.exe)

## Installation via GitHub CLI (Optional)

If you prefer using GitHub CLI:

```bash
# Install GitHub CLI first: https://cli.github.com/
gh auth login
```

### macOS (Apple Silicon - M1/M2/M3)
```bash
gh release download "v0.3.9-alpha" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.3.9-arm64.dmg"
open Builder.io-0.3.9-arm64.dmg
```

### macOS (Intel)
```bash
gh release download "v0.3.9-alpha" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.3.9.dmg"
open Builder.io-0.3.9.dmg
```

### Windows  
```bash
gh release download "v0.3.9-alpha" --repo "BuilderIO/native-app-distribution" --pattern "BuilderInstaller.exe"
./"BuilderInstaller.exe"
```

---

*Made with ❤️ by the Builder.io team*

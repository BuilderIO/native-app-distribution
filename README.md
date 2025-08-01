# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Quick Download

**Direct Download Links:**
- 🍎 **macOS (Apple Silicon)**: [Download Builder.io-0.1.25-arm64.dmg](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.1.25-alpha/Builder.io-0.1.25-arm64.dmg)
- 🍎 **macOS (Intel)**: [Download Builder.io-0.1.25.dmg](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.1.25-alpha/Builder.io-0.1.25.dmg)  
- 🪟 **Windows**: [Download Builder.io Setup 0.1.25.exe](https://github.com/BuilderIO/native-app-distribution/releases/download/v0.1.25-alpha/Builder.io.Setup.0.1.25.exe)

## Installation via GitHub CLI (Optional)

If you prefer using GitHub CLI:

```bash
# Install GitHub CLI first: https://cli.github.com/
gh auth login
```

### macOS (Apple Silicon - M1/M2/M3)
```bash
gh release download "v0.1.25-alpha" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.25-arm64.dmg"
open Builder.io-0.1.25-arm64.dmg
```

### macOS (Intel)
```bash
gh release download "v0.1.25-alpha" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.25.dmg"
open Builder.io-0.1.25.dmg
```

### Windows  
```bash
gh release download "v0.1.25-alpha" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io Setup 0.1.25.exe"
./"Builder.io Setup 0.1.25.exe"
```

---

*Made with ❤️ by the Builder.io team*

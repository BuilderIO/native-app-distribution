# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Installation

> **Prerequisites:** Install GitHub CLI and authenticate: `gh auth login`

### macOS (Apple Silicon - M1/M2/M3)
```bash
gh release download "v2025.07.31-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.0-arm64.dmg"
open Builder.io-0.1.0-arm64.dmg
```

### macOS (Intel)
```bash
gh release download "v2025.07.31-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.0.dmg"
open Builder.io-0.1.0.dmg
```

### Windows  
```bash
gh release download "v2025.07.31-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io Setup 0.1.0.exe"
./"Builder.io Setup 0.1.0.exe"
```

---

*Made with ❤️ by the Builder.io team*

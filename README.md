# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Installation

> **Prerequisites:** Install GitHub CLI and authenticate: `gh auth login`

### macOS (Apple Silicon - M1/M2/M3)
```bash
gh release download "v2025.07.29-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.14-arm64.dmg"
open Builder.io-0.1.14-arm64.dmg
```

### macOS (Intel)
```bash
gh release download "v2025.07.29-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io-0.1.14.dmg"
open Builder.io-0.1.14.dmg
```

### Windows  
```bash
gh release download "v2025.07.29-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "Builder.io Setup 0.1.14.exe"
./"Builder.io Setup 0.1.14.exe"
```

---

*Made with ❤️ by the Builder.io team*

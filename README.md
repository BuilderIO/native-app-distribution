# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Installation

> **Prerequisites:** Install GitHub CLI and authenticate: `gh auth login`

### macOS (Apple Silicon - M1/M2/M3)
```bash
gh release download "v2025.07.21-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "*arm64*.dmg"
open Builder.io-*arm64*.dmg
```

### macOS (Intel)
```bash
gh release download "v2025.07.21-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "*x64*.dmg"
open Builder.io-*x64*.dmg
```

### Windows  
```bash
gh release download "v2025.07.21-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "*.exe"
./Builder.io*.exe
```

---

*Made with ❤️ by the Builder.io team*

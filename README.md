# Builder.io Desktop App

> **Note**: This is a temporary placeholder repository for alpha releases of the Builder.io native app.

## Installation

> **Prerequisites:** Install GitHub CLI and authenticate: `gh auth login`

### macOS
```bash
gh release download "v2025.07.14-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "*.dmg"
open Builder.io-*.dmg
```

### Windows  
```bash
gh release download "v2025.07.14-prerelease" --repo "BuilderIO/native-app-distribution" --pattern "*.exe"
./Builder.io*.exe
```

---

*Made with ❤️ by the Builder.io team*

# Builder.io Desktop App

The official desktop application for Builder.io - a visual development platform.

## 📥 Installation

### Recommended: Terminal Download (No Security Warnings!)

Download via terminal to avoid macOS quarantine attributes:

#### macOS
```bash
# Download the latest release
curl -L -o "Builder.io.dmg" "$(curl -s https://api.github.com/repos/BuilderIO/native-app-distribution/releases/latest | grep 'browser_download_url.*\.dmg"' | cut -d '"' -f 4)"

# Open and install
open Builder.io.dmg
```

#### Windows
```bash
# Download the latest release
curl -L -o "Builder.io-Setup.exe" "$(curl -s https://api.github.com/repos/BuilderIO/native-app-distribution/releases/latest | grep 'browser_download_url.*\.exe"' | cut -d '"' -f 4)"

# Run installer
./Builder.io-Setup.exe
```

### Alternative: Browser Download

If you prefer downloading through your browser:

#### macOS
- **File**: `Builder.io-*.dmg`
- **Requirements**: macOS 10.14 or later
- **Installation**: Download, open DMG, drag to Applications
- **Architecture**: Universal (Intel & Apple Silicon)

**⚠️ Browser downloads may show security warnings.** If you see a "damaged" warning:
1. **Right-click** the app and select "Open"
2. Click "Open" in the security dialog

#### Windows
- **File**: `Builder.io Setup *.exe`
- **Requirements**: Windows 10 or later
- **Installation**: Download and run the `.exe` file
- **Architecture**: x64

## 🚀 Getting Started

1. Download using terminal (recommended) or browser
2. Install the application following your platform's standard process
3. Launch Builder.io from your applications folder
4. Sign in with your Builder.io account or create a new one

## 🔧 System Requirements

### Minimum Requirements
- **RAM**: 4GB
- **Storage**: 200MB free space
- **Internet**: Required for login and syncing

### Recommended Requirements
- **RAM**: 8GB or more
- **Storage**: 1GB free space
- **Display**: 1920x1080 or higher resolution


## 📋 Release Notes

Each release includes:
- Latest Builder.io features and improvements
- Performance optimizations
- Bug fixes and stability improvements
- Security updates

## 🆘 Support

- **Download Issues**: Use terminal download commands above
- **Documentation**: [docs.builder.io](https://docs.builder.io)
- **Community**: [community.builder.io](https://community.builder.io)
- **Bug Reports**: [GitHub Issues](https://github.com/BuilderIO/builder/issues)
- **Contact**: support@builder.io

curl -L -o "mac-installer.dmg" "$LATEST_MAC"
curl -L -o "win-installer.exe" "$LATEST_WIN"
```

---

*Made with ❤️ by the Builder.io team*

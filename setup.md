# Using Fusion Projects in Builder Desktop

Builder Desktop provides multiple options for running Fusion projects, giving you flexibility and performance advantages over the web-based application.

## Execution Environment Options

Builder Desktop offers three ways to run your Fusion projects:

### 1. Cloud Containers
Run fusion projects in cloud containers, same as our web app.

### 2. Local Machine (Container-less)

Run Fusion projects directly on your local machine without containerization.

**Benefits:**
- Fastest performance and startup times
- Direct access to your local development environment
- No additional software requirements
- Best for rapid development and iteration

**Requirements:**
- May require additional tools depending on your project
- These are typically already installed on most development machines

### 4. Local Containers (Docker)

Run Fusion projects in isolated local Podman containers.

**Benefits:**
- Good isolation between projects
- Consistent environment across different machines
- Local control over the container environment



## Configuration

To change your Fusion execution environment:

1. Open Builder Desktop
2. Go to **Settings** from the left sidebar → scroll all the way down and click **Advanced Settings** → **Labs**
4. Select your preferred option:

<img width="947" height="626" alt="Screenshot 2025-08-12 at 12 26 24 PM" src="https://github.com/user-attachments/assets/80c373ad-d6be-494b-a314-05f6e5771c2c" />


## Getting Started

1. **Install [Builder Desktop](https://github.com/BuilderIO/native-app-distribution/blob/main/README.md#quick-download)** if you haven't already
2. **Configure your execution environment** in Labs settings (we recommend "Local Machine")
3. **Create or open a Fusion project** to start developing with improved performance
4. **Enjoy faster iteration cycles** with local execution

## Troubleshooting

### Fusion Debug Info Modal

For comprehensive debugging and support, Builder Desktop includes a dedicated Fusion Debug Info modal that provides:

- **Project settings and configuration details**
- **Container logs inspection and download**
- **Direct access to developer tools for the webview**
- **One-click issue reporting with automatic log attachment**

#### How to Access:

1. **Open the command palette** by pressing `Cmd/ctrl + K`
2. **Type** `fusion: Debug Info` or just `debug info` and select "Fusion: Debug Info" from the dropdown
<img width="855" height="452" alt="Command palette" src="https://github.com/user-attachments/assets/23d38e70-2a6d-4e1f-b26f-a3ff0c550a62" />


3. **The Debug Info modal will open** showing all available debugging tools
<img width="1448" height="677" alt="Fusion Debug Info modal" src="https://github.com/user-attachments/assets/64a0cee1-a376-4802-8e03-13d45de63d3f" />

#### Available Actions in Debug Info Modal:

- **View Project Settings**: See your current Fusion execution environment and configuration
- **Inspect Logs**: View real-time container logs with counter indicators for repeated messages
- **Download Logs**: Export logs for offline analysis or sharing with support
- **Clear Logs**: Reset the log history for a fresh start
- **Open Dev Tools**: Access browser developer tools for the Fusion webview (useful for debugging frontend issues)
- **Report Issue**: Submit feedback with automatic log attachment for faster support resolution
<img width="786" height="496" alt="Support: report issue" src="https://github.com/user-attachments/assets/fcb14d71-5e13-4697-a275-ae01e899b293" />


You can also enable viewing the fusion logs in real time

1. Press `cmd/ctrl + k`, then choose `Toggle Developer Options`
2. Enable `Debug Fusion` to show project startup logs in the interface

<img width="755" height="533" alt="Screenshot 2025-08-12 at 12 30 34 PM" src="https://github.com/user-attachments/assets/577d0f86-d1c5-4e5a-9cad-da4b987c30f2" />

<img width="455" height="720" alt="Screenshot 2025-08-12 at 12 30 48 PM" src="https://github.com/user-attachments/assets/a77b94ab-b779-4b66-a971-e1460cf8ae71" />

### Common Issues and Solutions

#### Local Machine Issues
- Ensure you have the required development tools (Node.js, Git, etc.) installed
- Check that your project dependencies can be installed locally
- Use the Debug Info modal to view detailed error logs and project configuration

#### Local Container Issues
- Verify container permissions and access
- Check Docker/Podman installation and configuration
- Review container logs in the Debug Info modal for specific error messages

#### When to Use Debug Info Modal
- **Project won't start**: Check logs for startup errors and configuration issues
- **Runtime errors**: Monitor real-time logs during development
- **Performance issues**: Download logs for analysis or attach to support tickets
- **Need support**: Use the built-in reporting feature with automatic log attachment

#### Getting Help
When reporting issues to Builder support:

1. Open the Debug Info modal (`Cmd/Ctrl + P` → `fusion: Debug Info`)
2. Click **"Report Issue"** to open the feedback form
3. The checkbox to "Include container logs with feedback" will be automatically available
4. Describe your issue and submit - logs will be securely encrypted and attached
5. Support staff can decrypt and analyze your logs for faster resolution

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

<img width="947" height="626" alt="Screenshot 2025-08-12 at 12 26 24 PM" src="https://github.com/user-attachments/assets/80c373ad-d6be-494b-a314-05f6e5771c2c" />


## Getting Started

1. **Install [Builder Desktop](https://github.com/BuilderIO/native-app-distribution/blob/main/README.md#quick-download)** if you haven't already
2. **Configure your execution environment** in Labs settings (we recommend "Local Machine")
3. **Create or open a Fusion project** to start developing with improved performance
4. **Enjoy faster iteration cycles** with local execution

## Troubleshooting
Press `cmd/ctrl + k` , then choose `Toggle Developer Options`
<img width="755" height="533" alt="Screenshot 2025-08-12 at 12 30 34 PM" src="https://github.com/user-attachments/assets/577d0f86-d1c5-4e5a-9cad-da4b987c30f2" />

Then enable `Debug Fusion` this will show you the project startup logs.

<img width="455" height="720" alt="Screenshot 2025-08-12 at 12 30 48 PM" src="https://github.com/user-attachments/assets/a77b94ab-b779-4b66-a971-e1460cf8ae71" />


### Local Machine Issues
- Ensure you have the required development tools (Node.js, Git, etc.) installed
- Check that your project dependencies can be installed locally

### Local Container Issues
- Verify container permissions and access


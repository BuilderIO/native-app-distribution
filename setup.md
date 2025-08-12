# Using Fusion Projects in Builder Desktop

Builder Desktop provides multiple options for running Fusion projects, giving you flexibility and performance advantages over the web-based application.

## Execution Environment Options

Builder Desktop offers three ways to run your Fusion projects:

### 1. Local Machine (Container-less) - **Recommended**

Run Fusion projects directly on your local machine without containerization.

**Benefits:**
- Fastest performance and startup times
- Direct access to your local development environment
- No additional software requirements
- Best for rapid development and iteration

**Requirements:**
- May require additional tools depending on your project
- These are typically already installed on most development machines

### 2. Local Containers 

Run Fusion projects in isolated local docker containers.

**Benefits:**
- Good isolation between projects
- Consistent environment across different machines
- Local control over the container environment

**Requirements:**
- Docker must be installed on your machine [will soon be replaced with Podman]


## Configuration

To change your Fusion execution environment:

1. Open Builder Desktop
2. Go to **Settings** from the left sidebar → scroll all the way down and click **Advanced Settings** → **Labs**
4. Select your preferred option:
<img width="1143" height="527" alt="Screenshot 2025-08-12 at 9 19 37 AM" src="https://github.com/user-attachments/assets/b2004203-5f2a-4b16-ba6e-e1a22dbf2c90" />


## Getting Started

1. **Install Builder Desktop** if you haven't already
2. **Configure your execution environment** in Labs settings (we recommend "Local Machine")
3. **Create or open a Fusion project** to start developing with improved performance
4. **Enjoy faster iteration cycles** with local execution

## Troubleshooting
Press `cmd/ctrl + k` , then choose `Toggle Developer Options` and enable `Debug Fusion` this will show you the project startup logs.
<img width="979" height="497" alt="Screenshot 2025-08-12 at 9 19 49 AM" src="https://github.com/user-attachments/assets/d583f01f-067c-4ad8-acbe-586980df9352" />

### Local Machine Issues
- Ensure you have the required development tools (Node.js, Git, etc.) installed
- Check that your project dependencies can be installed locally

### Local Container Issues
- Confirm Docker is installed and running
- Check that Docker machine has sufficient resources
- Verify container permissions and access

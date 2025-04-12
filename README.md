# PhishShield

PhishShield is a Chrome extension designed to detect potential phishing websites using keyword analysis. It provides real-time feedback on the safety of the currently visited website.

## Features

- Detects phishing websites based on common phishing-related keywords.
- Alerts users with a warning message when a phishing site is detected.
- Displays the safety status of the current website in the extension popup.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the project folder.
5. The PhishShield extension will now be added to Chrome.

## Usage

1. Click on the PhishShield icon in the Chrome toolbar to open the popup.
2. The popup will display the safety status of the currently active tab:
   - ✅ **Safe**: The website is not flagged as phishing.
   - ⚠️ **Phishing Detected**: The website contains phishing-related keywords.

3. If a phishing site is detected, an alert will also appear on the webpage.

## File Structure
PhishShield/ 
    ├── background.js # Handles tab updates and injects content scripts 
    ├── content.js # Performs phishing detection on the webpage 
    ├── manifest.json # Chrome extension configuration 
    ├── popup.html # HTML for the extension popup 
    ├── popup.js # JavaScript for the extension popup functionality 
    ├── icon.png # Extension icon


## How It Works

1. **Background Script**:
   - Listens for tab updates and injects the `content.js` script into the active tab.

2. **Content Script**:
   - Scans the current webpage URL for phishing-related keywords.
   - Alerts the user if the site is flagged as phishing.

3. **Popup Script**:
   - Displays the safety status of the current tab in the popup.

## Tech Stack

- **HTML5**: For creating the popup interface.
- **CSS3**: For styling the popup.
- **JavaScript (ES6)**: For implementing the core logic of the extension.
- **Chrome Extensions API**: For interacting with browser tabs and injecting scripts.

## Permissions

The extension requires the following permissions:
- `activeTab`: To access the URL of the active tab.
- `scripting`: To inject scripts into the active tab.
- `host_permissions`: To allow scanning of all URLs.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

## Disclaimer

PhishShield uses a basic keyword-based detection mechanism and may not detect all phishing websites. Always exercise caution when entering sensitive information online.

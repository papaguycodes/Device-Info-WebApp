# Device Info WebApp

## Overview
The Device Info App is designed to provide users with detailed information about their device and environment. It utilizes various web APIs to gather and display this information.

## Features

### Device Information
- **User Agent**: The user agent string of the browser.
- **Platform**: The platform the browser is running on (e.g., Windows, macOS).
- **Language**: The preferred language set in the browser.
- **Screen Resolution**: The resolution of the user's screen.
- **Time Zone**: The time zone of the user's system.
- **IP Address**: The IP address of the user.
- **Latitude and Longitude**: The geographical coordinates of the user.
- **Connection Type**: The type of network connection (e.g., WiFi, cellular).
- **Browser Name and Version**: The name and version of the browser.
- **Device Memory**: The amount of device memory available.
- **CPU Cores**: The number of CPU cores.
- **Hardware Concurrency**: The number of logical processors.
- **Online Status**: Whether the user is online or offline.
- **Connection Speed**: The effective connection speed.
- **Touch Capable**: Whether the device supports touch.
- **Screen Orientation**: The orientation of the screen (e.g., portrait, landscape).
- **Color Depth**: The color depth of the screen.
- **Device Pixel Ratio**: The ratio of the device's physical pixels to its logical pixels.
- **Device Name**: The name of the device (if available).
- **Operating System and Version**: The operating system and its version.
- **Battery Level**: The battery level of the device.
- **Network Information**: Information about the network (if available).
- **Geolocation Support**: Whether geolocation is supported.
- **JavaScript Enabled**: Whether JavaScript is enabled in the browser.
- **Cookies Enabled**: Whether cookies are enabled.
- **WebGL Support**: Whether WebGL is supported.
- **Local Storage Support**: Whether local storage is supported.
- **Session Storage Support**: Whether session storage is supported.
- **IndexedDB Support**: Whether IndexedDB is supported.
- **Service Worker Support**: Whether service workers are supported.
- **Media Queries**: Whether media queries are supported.
- **Orientation Lock**: Whether orientation lock is supported.
- **Pixel Ratio**: The device pixel ratio.
- **Screen Size**: The size of the screen.
- **Last Updated**: The date and time when the information was last updated.
- **Network Type**: The type of network (e.g., 4G, 5G).
- **Device Type**: The type of device (e.g., mobile, tablet, desktop).
- **App Name and Version**: The name and version of the app.

## APIs Used
- **IP Address**: [ipify API](https://www.ipify.org)
- **Geolocation**: [ipapi API](https://ipapi.co)

## Error Handling
- The app includes error handling for fetching IP and geolocation data.
- Displays default or error messages if data retrieval fails.

## Future Enhancements
- **Enhanced Error Handling**: More detailed error messages and user feedback.
- **Additional Device Features**: Inclusion of more device-specific features and metrics.
- **Localization**: Support for multiple languages and regional settings.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

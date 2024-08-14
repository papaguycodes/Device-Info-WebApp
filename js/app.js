<!-- //💡In the Beginning, PaPaGuy wrote beautiful Codes < /> 💜❤️ // -->
// Utility function to fetch IP address
async function fetchIpAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'N/A';
    }
}

// Utility function to fetch geolocation data
async function fetchGeolocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return {
            latitude: data.latitude || 'N/A',
            longitude: data.longitude || 'N/A'
        };
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        return { latitude: 'N/A', longitude: 'N/A' };
    }
}

// Function to update device information including IP and geolocation
async function updateDeviceInfo() {
    const deviceInfo = getDeviceInfo();
    document.getElementById('user-agent').textContent = deviceInfo.userAgent;
    document.getElementById('platform').textContent = deviceInfo.platform;
    document.getElementById('language').textContent = deviceInfo.language;
    document.getElementById('screen-resolution').textContent = deviceInfo.screenResolution;
    document.getElementById('time-zone').textContent = deviceInfo.timeZone;

    // Fetch IP and Geolocation
    document.getElementById('ip-address').textContent = await fetchIpAddress();
    const geoData = await fetchGeolocation();
    document.getElementById('latitude').textContent = geoData.latitude;
    document.getElementById('longitude').textContent = geoData.longitude;

    document.getElementById('connection-type').textContent = deviceInfo.connectionType;
    document.getElementById('browser-name').textContent = deviceInfo.browserName;
    document.getElementById('browser-version').textContent = deviceInfo.browserVersion;
    document.getElementById('device-memory').textContent = deviceInfo.deviceMemory;
    document.getElementById('cpu-cores').textContent = deviceInfo.cpuCores;
    document.getElementById('hardware-concurrency').textContent = deviceInfo.hardwareConcurrency;
    document.getElementById('online-status').textContent = deviceInfo.onlineStatus;
    document.getElementById('connection-speed').textContent = deviceInfo.connectionSpeed;
    document.getElementById('touch-capable').textContent = deviceInfo.touchCapable;
    document.getElementById('screen-orientation').textContent = deviceInfo.screenOrientation;
    document.getElementById('color-depth').textContent = deviceInfo.colorDepth;
    document.getElementById('device-pixel-ratio').textContent = deviceInfo.devicePixelRatio;
    document.getElementById('device-name').textContent = deviceInfo.deviceName;
    document.getElementById('operating-system').textContent = deviceInfo.operatingSystem;
    document.getElementById('os-version').textContent = deviceInfo.osVersion;
    document.getElementById('battery-level').textContent = deviceInfo.batteryLevel;
    document.getElementById('network-information').textContent = deviceInfo.networkInformation;
    document.getElementById('geolocation-support').textContent = deviceInfo.geolocationSupport;
    document.getElementById('js-enabled').textContent = deviceInfo.jsEnabled;
    document.getElementById('cookies-enabled').textContent = deviceInfo.cookiesEnabled;
    document.getElementById('webgl-support').textContent = deviceInfo.webglSupport;
    document.getElementById('local-storage-support').textContent = deviceInfo.localStorageSupport;
    document.getElementById('session-storage-support').textContent = deviceInfo.sessionStorageSupport;
    document.getElementById('indexeddb-support').textContent = deviceInfo.indexeddbSupport;
    document.getElementById('service-worker-support').textContent = deviceInfo.serviceWorkerSupport;
    document.getElementById('media-queries').textContent = deviceInfo.mediaQueries;
    document.getElementById('orientation-lock').textContent = deviceInfo.orientationLock;
    document.getElementById('pixel-ratio').textContent = deviceInfo.pixelRatio;
    document.getElementById('screen-size').textContent = deviceInfo.screenSize;
    document.getElementById('last-updated').textContent = deviceInfo.lastUpdated;
    document.getElementById('network-type').textContent = deviceInfo.networkType;
    document.getElementById('device-type').textContent = deviceInfo.deviceType;
    document.getElementById('app-name').textContent = deviceInfo.appName;
    document.getElementById('app-version').textContent = deviceInfo.appVersion;
}

// Call the update function on page load
window.onload = updateDeviceInfo;

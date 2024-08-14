// Function to get device information
function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ip: '', // Placeholder for IP address
        latitude: '', // Placeholder for latitude
        longitude: '', // Placeholder for longitude
        connectionType: navigator.connection ? navigator.connection.effectiveType : 'N/A',
        browserName: (function() {
            const userAgent = navigator.userAgent;
            if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
            if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) return 'Opera';
            if (userAgent.indexOf('Trident') > -1) return 'Internet Explorer';
            if (userAgent.indexOf('Edge') > -1) return 'Edge';
            if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
            if (userAgent.indexOf('Safari') > -1) return 'Safari';
            return 'Unknown';
        })(),
        browserVersion: navigator.appVersion,
        deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'N/A',
        cpuCores: navigator.hardwareConcurrency || 'N/A',
        hardwareConcurrency: navigator.hardwareConcurrency || 'N/A',
        onlineStatus: navigator.onLine ? 'Online' : 'Offline',
        connectionSpeed: navigator.connection ? navigator.connection.downlink : 'N/A',
        touchCapable: 'ontouchstart' in window ? 'Yes' : 'No',
        screenOrientation: window.screen.orientation ? window.screen.orientation.type : 'N/A',
        colorDepth: window.screen.colorDepth,
        devicePixelRatio: window.devicePixelRatio,
        deviceName: 'navigator.deviceName', 
        operatingSystem: navigator.platform,
        osVersion: 'navigator.osVersion', 
        batteryLevel: 'navigator.batteryLevel', 
        networkInformation: 'N/A', // Placeholder for network information
        geolocationSupport: 'geolocation' in navigator ? 'Yes' : 'No',
        jsEnabled: 'Yes',
        cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
        webglSupport: 'WebGL' in window ? 'Yes' : 'No',
        localStorageSupport: 'localStorage' in window ? 'Yes' : 'No',
        sessionStorageSupport: 'sessionStorage' in window ? 'Yes' : 'No',
        indexeddbSupport: 'indexedDB' in window ? 'Yes' : 'No',
        serviceWorkerSupport: 'serviceWorker' in navigator ? 'Yes' : 'No',
        mediaQueries: window.matchMedia ? 'Yes' : 'No',
        orientationLock: 'orientation' in screen ? 'Supported' : 'Not Supported',
        pixelRatio: window.devicePixelRatio,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        lastUpdated: new Date().toLocaleString(),
        networkType: navigator.connection ? navigator.connection.type : 'N/A',
        deviceType: 'navigator.deviceType',
        appName: navigator.appName,
        appVersion: navigator.appVersion
    };
}

// Function to update device information on the page
function updateDeviceInfo() {
    const deviceInfo = getDeviceInfo();
    document.getElementById('user-agent').textContent = deviceInfo.userAgent;
    document.getElementById('platform').textContent = deviceInfo.platform;
    document.getElementById('language').textContent = deviceInfo.language;
    document.getElementById('screen-resolution').textContent = deviceInfo.screenResolution;
    document.getElementById('time-zone').textContent = deviceInfo.timeZone;
    document.getElementById('ip-address').textContent = deviceInfo.ip;
    document.getElementById('latitude').textContent = deviceInfo.latitude;
    document.getElementById('longitude').textContent = deviceInfo.longitude;
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

// Call update function on page load
window.onload = updateDeviceInfo;

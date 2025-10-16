interface DeviceInfo {
    userAgent: string;
    screenWidth: number;
    screenHeight: number;
    language: string;
}

interface AnalyticsPayload {
    userId: string;
    sessionId: string;
    timestamp: string;
    visitCount: number;
    firstVisit: string;
    page: {
        path: string;
        referrer: string;
        title: string;
    };
    deviceInfo: DeviceInfo;
}

// This endpoint URL is a placeholder. Replace it with your actual n8n, Zapier, or custom backend webhook URL.
const ANALYTICS_ENDPOINT = 'https://n8n.sixzenith.space/webhook/keenon-analytics-tracking';

const getOrCreateUser = (): { userId: string; visitCount: number; firstVisit: string } => {
    let userDataString = localStorage.getItem('userAnalytics');
    let userData;

    try {
        userData = userDataString ? JSON.parse(userDataString) : {};
    } catch (e) {
        userData = {};
    }
    
    if (!userData.userId) {
        userData = {
            userId: crypto.randomUUID(),
            visitCount: 1,
            firstVisit: new Date().toISOString(),
        };
    } else {
        userData.visitCount = (userData.visitCount || 0) + 1;
    }

    localStorage.setItem('userAnalytics', JSON.stringify(userData));
    return userData;
};

export const trackPageView = () => {
    // Only proceed if the user has explicitly accepted cookie usage.
    if (localStorage.getItem('cookieConsent') !== 'accepted') {
        return;
    }

    try {
        const { userId, visitCount, firstVisit } = getOrCreateUser();
        
        const sessionId = sessionStorage.getItem('sessionId') || crypto.randomUUID();
        if (!sessionStorage.getItem('sessionId')) {
            sessionStorage.setItem('sessionId', sessionId);
        }

        const payload: AnalyticsPayload = {
            userId,
            sessionId,
            timestamp: new Date().toISOString(),
            visitCount,
            firstVisit,
            page: {
                path: window.location.href,
                referrer: document.referrer || 'direct',
                title: document.title,
            },
            deviceInfo: {
                userAgent: navigator.userAgent,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                language: navigator.language,
            },
        };

        // Asynchronously send the data to the backend endpoint.
        // We use navigator.sendBeacon if available for reliability on page unload, otherwise fallback to fetch.
        const data = JSON.stringify(payload);
        if (navigator.sendBeacon) {
            navigator.sendBeacon(ANALYTICS_ENDPOINT, new Blob([data], { type: 'application/json' }));
        } else {
            fetch(ANALYTICS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
                keepalive: true, // Helps ensure the request completes even if the page is closing
            }).catch(error => {
                console.error('Analytics fetch failed:', error);
            });
        }

    } catch (error) {
        // Silently fail to avoid impacting user experience.
        console.error('Error in analytics tracking:', error);
    }
};

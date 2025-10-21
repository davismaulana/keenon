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
    page: {
        path: string;
        referrer: string;
        title: string;
    };
    deviceInfo: DeviceInfo;
}

const ANALYTICS_ENDPOINT = 'https://xinyi-backend.vercel.app/track';

const getOrCreateUserId = (): string => {
    let userId = localStorage.getItem('userAnalyticsId');
    if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem('userAnalyticsId', userId);
    }
    return userId;
};

export const trackPageView = () => {
    // Only proceed if the user has explicitly accepted cookie usage for the current session.
    if (sessionStorage.getItem('cookieConsent') !== 'accepted') {
        return;
    }

    try {
        const userId = getOrCreateUserId();
        
        const sessionId = sessionStorage.getItem('sessionId') || crypto.randomUUID();
        if (!sessionStorage.getItem('sessionId')) {
            sessionStorage.setItem('sessionId', sessionId);
        }

        const payload: AnalyticsPayload = {
            userId,
            sessionId,
            timestamp: new Date().toISOString(),
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
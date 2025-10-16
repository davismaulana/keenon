import Cookies from 'js-cookie';

// Cookie configuration
export const COOKIE_CONFIG = {
  CONSENT: 'cookie_consent',
  USER_ID: 'user_id',
  SESSION_ID: 'session_id',
  VISIT_COUNT: 'visit_count',
  LAST_VISIT: 'last_visit',
  LANGUAGE_PREFERENCE: 'language_preference',
  PAGE_VIEWS: 'page_views',
  TIME_ON_SITE: 'time_on_site',
  DEVICE_TYPE: 'device_type',
  BROWSER: 'browser',
  REFERRER: 'referrer',
  UTM_SOURCE: 'utm_source',
  UTM_MEDIUM: 'utm_medium',
  UTM_CAMPAIGN: 'utm_campaign',
  CONTACT_FORM_SUBMISSIONS: 'contact_form_submissions',
  PRODUCT_VIEWS: 'product_views',
  SOLUTION_INTERESTS: 'solution_interests',
  CUSTOMER_DATA: 'customer_data'
};

// Cookie expiration times (in days)
export const COOKIE_EXPIRY = {
  CONSENT: 365, // 1 year
  USER_ID: 365, // 1 year
  SESSION_ID: 1, // 1 day
  VISIT_COUNT: 365, // 1 year
  LAST_VISIT: 365, // 1 year
  LANGUAGE_PREFERENCE: 365, // 1 year
  PAGE_VIEWS: 30, // 30 days
  TIME_ON_SITE: 30, // 30 days
  DEVICE_TYPE: 365, // 1 year
  BROWSER: 365, // 1 year
  REFERRER: 30, // 30 days
  UTM_SOURCE: 30, // 30 days
  UTM_MEDIUM: 30, // 30 days
  UTM_CAMPAIGN: 30, // 30 days
  CONTACT_FORM_SUBMISSIONS: 365, // 1 year
  PRODUCT_VIEWS: 30, // 30 days
  SOLUTION_INTERESTS: 30, // 30 days
  CUSTOMER_DATA: 365 // 1 year
};

// Types for customer data
export interface CustomerData {
  userId: string;
  sessionId: string;
  visitCount: number;
  lastVisit: string;
  languagePreference: string;
  pageViews: string[];
  timeOnSite: number;
  deviceType: string;
  browser: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  contactFormSubmissions: number;
  productViews: string[];
  solutionInterests: string[];
  consentGiven: boolean;
  consentDate: string;
  consentVersion: string;
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  date: string;
  version: string;
}

// Cookie utility functions
export class CookieManager {
  // Set a cookie with expiration
  static setCookie(name: string, value: string, days: number = 30): void {
    Cookies.set(name, value, { 
      expires: days,
      secure: window.location.protocol === 'https:',
      sameSite: 'lax'
    });
  }

  // Get a cookie value
  static getCookie(name: string): string | undefined {
    return Cookies.get(name);
  }

  // Remove a cookie
  static removeCookie(name: string): void {
    Cookies.remove(name);
  }

  // Check if consent is given
  static hasConsent(): boolean {
    const consent = this.getCookie(COOKIE_CONFIG.CONSENT);
    return consent === 'true';
  }

  // Set consent
  static setConsent(consent: CookieConsent): void {
    this.setCookie(COOKIE_CONFIG.CONSENT, 'true', COOKIE_EXPIRY.CONSENT);
    this.setCookie('cookie_consent_details', JSON.stringify(consent), COOKIE_EXPIRY.CONSENT);
  }

  // Get consent details
  static getConsentDetails(): CookieConsent | null {
    const consentStr = this.getCookie('cookie_consent_details');
    if (consentStr) {
      try {
        return JSON.parse(consentStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  // Generate unique user ID
  static generateUserId(): string {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Generate session ID
  static generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Get or create user ID
  static getUserId(): string {
    let userId = this.getCookie(COOKIE_CONFIG.USER_ID);
    if (!userId) {
      userId = this.generateUserId();
      this.setCookie(COOKIE_CONFIG.USER_ID, userId, COOKIE_EXPIRY.USER_ID);
    }
    return userId;
  }

  // Get or create session ID
  static getSessionId(): string {
    let sessionId = this.getCookie(COOKIE_CONFIG.SESSION_ID);
    if (!sessionId) {
      sessionId = this.generateSessionId();
      this.setCookie(COOKIE_CONFIG.SESSION_ID, sessionId, COOKIE_EXPIRY.SESSION_ID);
    }
    return sessionId;
  }

  // Track page view
  static trackPageView(page: string): void {
    if (!this.hasConsent()) return;

    const currentViews = this.getCookie(COOKIE_CONFIG.PAGE_VIEWS);
    const views = currentViews ? JSON.parse(currentViews) : [];
    
    // Add new page view with timestamp
    views.push({
      page,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    // Keep only last 50 page views
    if (views.length > 50) {
      views.splice(0, views.length - 50);
    }

    this.setCookie(COOKIE_CONFIG.PAGE_VIEWS, JSON.stringify(views), COOKIE_EXPIRY.PAGE_VIEWS);
  }

  // Track product view
  static trackProductView(productId: string): void {
    if (!this.hasConsent()) return;

    const currentViews = this.getCookie(COOKIE_CONFIG.PRODUCT_VIEWS);
    const views = currentViews ? JSON.parse(currentViews) : [];
    
    views.push({
      productId,
      timestamp: new Date().toISOString()
    });

    // Keep only last 20 product views
    if (views.length > 20) {
      views.splice(0, views.length - 20);
    }

    this.setCookie(COOKIE_CONFIG.PRODUCT_VIEWS, JSON.stringify(views), COOKIE_EXPIRY.PRODUCT_VIEWS);
  }

  // Track solution interest
  static trackSolutionInterest(solutionId: string): void {
    if (!this.hasConsent()) return;

    const currentInterests = this.getCookie(COOKIE_CONFIG.SOLUTION_INTERESTS);
    const interests = currentInterests ? JSON.parse(currentInterests) : [];
    
    interests.push({
      solutionId,
      timestamp: new Date().toISOString()
    });

    // Keep only last 10 solution interests
    if (interests.length > 10) {
      interests.splice(0, interests.length - 10);
    }

    this.setCookie(COOKIE_CONFIG.SOLUTION_INTERESTS, JSON.stringify(interests), COOKIE_EXPIRY.SOLUTION_INTERESTS);
  }

  // Track contact form submission
  static trackContactFormSubmission(): void {
    if (!this.hasConsent()) return;

    const currentSubmissions = parseInt(this.getCookie(COOKIE_CONFIG.CONTACT_FORM_SUBMISSIONS) || '0');
    this.setCookie(COOKIE_CONFIG.CONTACT_FORM_SUBMISSIONS, (currentSubmissions + 1).toString(), COOKIE_EXPIRY.CONTACT_FORM_SUBMISSIONS);
  }

  // Get device type
  static getDeviceType(): string {
    const userAgent = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      return 'tablet';
    }
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
      return 'mobile';
    }
    return 'desktop';
  }

  // Get browser info
  static getBrowserInfo(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Edge') > -1) return 'Edge';
    if (userAgent.indexOf('Opera') > -1) return 'Opera';
    return 'Unknown';
  }

  // Initialize customer tracking
  static initializeCustomerTracking(): void {
    // Set device type and browser info
    this.setCookie(COOKIE_CONFIG.DEVICE_TYPE, this.getDeviceType(), COOKIE_EXPIRY.DEVICE_TYPE);
    this.setCookie(COOKIE_CONFIG.BROWSER, this.getBrowserInfo(), COOKIE_EXPIRY.BROWSER);

    // Track referrer
    if (document.referrer) {
      this.setCookie(COOKIE_CONFIG.REFERRER, document.referrer, COOKIE_EXPIRY.REFERRER);
    }

    // Track UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    if (utmSource) this.setCookie(COOKIE_CONFIG.UTM_SOURCE, utmSource, COOKIE_EXPIRY.UTM_SOURCE);
    if (utmMedium) this.setCookie(COOKIE_CONFIG.UTM_MEDIUM, utmMedium, COOKIE_EXPIRY.UTM_MEDIUM);
    if (utmCampaign) this.setCookie(COOKIE_CONFIG.UTM_CAMPAIGN, utmCampaign, COOKIE_EXPIRY.UTM_CAMPAIGN);

    // Track visit count
    const visitCount = parseInt(this.getCookie(COOKIE_CONFIG.VISIT_COUNT) || '0');
    this.setCookie(COOKIE_CONFIG.VISIT_COUNT, (visitCount + 1).toString(), COOKIE_EXPIRY.VISIT_COUNT);
    this.setCookie(COOKIE_CONFIG.LAST_VISIT, new Date().toISOString(), COOKIE_EXPIRY.LAST_VISIT);
  }

  // Get all customer data
  static getCustomerData(): CustomerData {
    const consentDetails = this.getConsentDetails();
    
    return {
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      visitCount: parseInt(this.getCookie(COOKIE_CONFIG.VISIT_COUNT) || '0'),
      lastVisit: this.getCookie(COOKIE_CONFIG.LAST_VISIT) || '',
      languagePreference: this.getCookie(COOKIE_CONFIG.LANGUAGE_PREFERENCE) || 'en',
      pageViews: JSON.parse(this.getCookie(COOKIE_CONFIG.PAGE_VIEWS) || '[]'),
      timeOnSite: parseInt(this.getCookie(COOKIE_CONFIG.TIME_ON_SITE) || '0'),
      deviceType: this.getCookie(COOKIE_CONFIG.DEVICE_TYPE) || 'unknown',
      browser: this.getCookie(COOKIE_CONFIG.BROWSER) || 'unknown',
      referrer: this.getCookie(COOKIE_CONFIG.REFERRER) || '',
      utmSource: this.getCookie(COOKIE_CONFIG.UTM_SOURCE) || undefined,
      utmMedium: this.getCookie(COOKIE_CONFIG.UTM_MEDIUM) || undefined,
      utmCampaign: this.getCookie(COOKIE_CONFIG.UTM_CAMPAIGN) || undefined,
      contactFormSubmissions: parseInt(this.getCookie(COOKIE_CONFIG.CONTACT_FORM_SUBMISSIONS) || '0'),
      productViews: JSON.parse(this.getCookie(COOKIE_CONFIG.PRODUCT_VIEWS) || '[]'),
      solutionInterests: JSON.parse(this.getCookie(COOKIE_CONFIG.SOLUTION_INTERESTS) || '[]'),
      consentGiven: this.hasConsent(),
      consentDate: consentDetails?.date || '',
      consentVersion: consentDetails?.version || '1.0'
    };
  }

  // Clear all cookies (for GDPR compliance)
  static clearAllCookies(): void {
    Object.values(COOKIE_CONFIG).forEach(cookieName => {
      this.removeCookie(cookieName);
    });
    this.removeCookie('cookie_consent_details');
  }

  // Export customer data as JSON
  static exportCustomerData(): string {
    return JSON.stringify(this.getCustomerData(), null, 2);
  }
}

# Cookie System Documentation

## Overview

This cookie system has been implemented to gather customer information from website visitors in compliance with GDPR and privacy regulations. The system includes comprehensive consent management, data collection, and analytics capabilities.

## Features

### 1. Cookie Consent Management
- **Consent Banner**: Appears on first visit to request user consent
- **Granular Controls**: Users can choose which types of cookies to accept
- **Cookie Categories**:
  - **Necessary**: Essential for website functionality (always active)
  - **Analytics**: Track website usage and performance
  - **Marketing**: Enable targeted advertising and marketing
  - **Preferences**: Remember user choices and settings

### 2. Data Collection
The system collects the following customer information:

#### User Identification
- Unique User ID (generated and stored)
- Session ID (for tracking individual visits)
- Visit count and last visit timestamp

#### Browsing Behavior
- Page views with timestamps
- Product views and interests
- Solution interests (catering, hotel, etc.)
- Time spent on site
- Contact form submissions

#### Technical Information
- Device type (desktop, mobile, tablet)
- Browser information
- Language preferences
- Referrer information
- UTM parameters (for marketing campaigns)

### 3. Privacy Compliance
- **GDPR Compliant**: Users can export, view, and delete their data
- **Consent Management**: Clear consent options with detailed explanations
- **Data Export**: Users can download their data in JSON format
- **Data Deletion**: Users can clear all stored data

### 4. Analytics Dashboard
Users can view their own analytics including:
- Total visits and page views
- Popular pages and products
- Solution interests
- Contact form submissions
- Time on site
- Device and browser information

## File Structure

```
├── utils/cookies.ts                 # Core cookie management utilities
├── components/CookieConsent.tsx     # Consent banner component
├── components/CookieSettings.tsx    # Settings and analytics dashboard
├── context/CustomerDataContext.tsx  # React context for data management
└── COOKIE_SYSTEM.md                 # This documentation
```

## Usage

### Basic Integration
The cookie system is automatically integrated into the main App component and will:
1. Show consent banner on first visit
2. Track page views and user interactions
3. Store data based on user consent preferences

### Tracking Events
```typescript
import { useCustomerTracking } from './context/CustomerDataContext';

const MyComponent = () => {
  const { trackPageView, trackProductView, trackSolutionInterest } = useCustomerTracking();
  
  // Track page view
  trackPageView('product-detail');
  
  // Track product interest
  trackProductView('robot-arm-1');
  
  // Track solution interest
  trackSolutionInterest('catering');
};
```

### Accessing Customer Data
```typescript
import { useCustomerData } from './context/CustomerDataContext';

const MyComponent = () => {
  const { customerData, hasConsent } = useCustomerData();
  
  if (hasConsent && customerData) {
    console.log('User ID:', customerData.userId);
    console.log('Visit count:', customerData.visitCount);
    console.log('Page views:', customerData.pageViews);
  }
};
```

### Analytics
```typescript
import { useCustomerAnalytics } from './context/CustomerDataContext';

const AnalyticsComponent = () => {
  const { getAnalyticsSummary, getPopularPages, exportCustomerData } = useCustomerAnalytics();
  
  const summary = getAnalyticsSummary();
  const popularPages = getPopularPages();
  const dataExport = exportCustomerData();
};
```

## Cookie Types and Expiration

| Cookie Name | Purpose | Expiration |
|-------------|---------|------------|
| cookie_consent | Consent status | 1 year |
| user_id | Unique user identifier | 1 year |
| session_id | Session tracking | 1 day |
| visit_count | Number of visits | 1 year |
| last_visit | Last visit timestamp | 1 year |
| page_views | Page view history | 30 days |
| product_views | Product interest tracking | 30 days |
| solution_interests | Solution interest tracking | 30 days |
| contact_form_submissions | Form submission count | 1 year |
| device_type | Device information | 1 year |
| browser | Browser information | 1 year |
| referrer | Traffic source | 30 days |
| utm_* | Marketing campaign data | 30 days |

## Privacy Features

### Data Export
Users can export their complete data profile including:
- All tracking data
- Consent preferences
- Timestamps and metadata

### Data Deletion
Users can completely clear all stored data, which will:
- Remove all cookies
- Reset consent status
- Clear all tracking data

### Consent Management
Users can:
- View current consent settings
- Modify cookie preferences
- Withdraw consent at any time

## Security Considerations

- Cookies are marked as `secure` when served over HTTPS
- SameSite attribute set to `lax` for CSRF protection
- No personally identifiable information is collected without explicit consent
- All data is stored locally in the user's browser

## Compliance Notes

This cookie system is designed to be GDPR compliant:
- ✅ Clear consent mechanism
- ✅ Granular consent options
- ✅ Data portability (export)
- ✅ Right to be forgotten (deletion)
- ✅ Transparent data processing
- ✅ Privacy by design

## Future Enhancements

Potential improvements could include:
- Server-side data storage for analytics
- Advanced user segmentation
- A/B testing capabilities
- Integration with marketing tools
- Enhanced privacy controls
- Automated data retention policies

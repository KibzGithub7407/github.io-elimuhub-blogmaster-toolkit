// Elimuhub BlogMaster Toolkit Configuration
const ElimuhubConfig = {
    // Main Blogger site configuration
    blogger: {
        mainSite: "https://elimuhubconsultants.blogspot.com",
        siteName: "Elimuhub Education Consultants",
        description: "Professional education consulting services and resources",
        author: "Elimuhub Team"
    },
    
    // SEO Tools Configuration
    seoTools: {
        enabled: true,
        apis: {
            googlePagespeed: "YOUR_API_KEY",
            moz: "YOUR_MOZ_API_KEY",
            googleSearchConsole: "INTEGRATION_SETUP"
        }
    },
    
    // Analytics Configuration
    analytics: {
        googleAnalytics: "GA_MEASUREMENT_ID",
        googleTagManager: "GTM_CONTAINER_ID"
    },
    
    // Social Media Links
    social: {
        blogger: "https://elimuhubconsultants.blogspot.com",
        twitter: "#",
        linkedin: "#",
        email: "contact@elimuhub.com"
    },
    
    // Feature Toggles
    features: {
        seoAnalyzer: true,
        performanceMonitor: true,
        contentInspector: true,
        mobileChecker: true
    },
    
    // Theme Configuration
    theme: {
        primaryColor: "#2c3e50",
        secondaryColor: "#3498db",
        accentColor: "#e74c3c"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElimuhubConfig;
}

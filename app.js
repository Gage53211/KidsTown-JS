import { renderLandingPage } from './landingPage.js';

// A simple client-side router function to handle view transitions
function router(key) {
    console.log(`Navigating to route key: ${key}`);
    
    if (key === '1000') {
        // For now, we'll just show an alert. 
        // As we build more pages, you'll call the next page's render function here!
        alert("Success! This is where the next page (KEY=1000) will load.");
    }
}

// When the DOM is fully loaded, launch the landing page
document.addEventListener('DOMContentLoaded', () => {
    renderLandingPage(router);
});
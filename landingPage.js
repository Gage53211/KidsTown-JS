/**
 * Renders the KidsTown Landing Page / Visitor Center.
 * @param {Function} navigate - A router callback function to handle navigation changes (e.g., moving to KEY=1000).
 */
export function renderLandingPage(navigate) {
    const app = document.getElementById('app');

    // Update the document title to match the original HTML <TITLE>
    document.title = "Visit KidsTown!";

    // Inject the HTML template
    app.innerHTML = `
        <div class="landing-container">
            <div class="header-section">
                <h1>KidsTown</h1>
                <h2>Visitor Center</h2>
            </div>

            <div class="content-section">
                <p>
                    <a href="#" id="visit-link" class="town-link">Click to visit KidsTown.</a>
                </p>
                <div class="image-container">
                    <a href="#" id="visit-img-link">
                        <img 
                            src="graphics/home/hometown.gif" 
                            alt="Go To KidsTown" 
                            width="155" 
                            height="159" 
                            border="1"
                        />
                    </a>
                </div>
            </div>
        </div>
    `;

    // Apply basic inline/dynamic styling to preserve the 1998 aesthetic 
    // (You can also move these to a global styles.css file for cleaner maintenance)
    const container = app.querySelector('.landing-container');
    container.style.backgroundColor = '#EEE2B4';
    container.style.color = 'black';
    container.style.minHeight = '100vh';
    container.style.padding = '40px 20px';
    container.style.fontFamily = 'Arial, sans-serif';

    app.querySelector('.header-section').style.textAlign = 'center';
    app.querySelector('.header-section').querySelector('h1').style.fontSize = '3.5rem';
    app.querySelector('.header-section').querySelector('h1').style.marginBottom = '0px';
    app.querySelector('.header-section').querySelector('h2').style.fontSize = '2rem';
    app.querySelector('.header-section').querySelector('h2').style.marginTop = '10px';

    const contentSection = app.querySelector('.content-section');
    contentSection.style.textAlign = 'center';
    contentSection.style.marginTop = '40px';

    const link = app.querySelector('.town-link');
    link.style.fontSize = '1.5rem';
    link.style.fontWeight = 'bold';
    link.style.color = 'blue';
    link.style.textDecoration = 'underline';

    // Event listener to replace the old CGI backend route with client-side routing
    const handleNavigation = (e) => {
        e.preventDefault();
        if (typeof navigate === 'function') {
            // Passing '1000' mimics the original ?KEY=1000 parameter request
            navigate('1000'); 
        } else {
            console.warn("Navigation handler not provided.");
        }
    };

    app.querySelector('#visit-link').addEventListener('click', handleNavigation);
    app.querySelector('#visit-img-link').addEventListener('click', handleNavigation);
}
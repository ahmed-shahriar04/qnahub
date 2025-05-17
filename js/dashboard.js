document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode from localStorage
    initDarkMode();
    
    // Set up event listeners
    setupDarkModeToggle();
    setupSearchFunctionality();
    setupCardAddingButton();
});

function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (!darkModeToggle) return;
    
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<div class="tooltip"><i class="fa-solid fa-sun"></i><span class="tooltiptext">Dark or Light</span></div>';
    } else {
        darkModeToggle.innerHTML = '<div class="tooltip"><i class="fa-solid fa-moon"></i><span class="tooltiptext">Dark or Light</span></div>';
    }
}

function setupDarkModeToggle() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (!darkModeToggle) return;
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<div class="tooltip"><i class="fa-solid fa-moon"></i><span class="tooltiptext">Dark or Light</span></div>';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<div class="tooltip"><i class="fa-solid fa-sun"></i><span class="tooltiptext">Dark or Light</span></div>';
    }
}

function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }
}

function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const courses = document.querySelectorAll('.singleBox');
    
    courses.forEach(course => {
        const title = course.querySelector('.boxTitle').textContent.toLowerCase();
        course.style.display = title.includes(searchTerm) ? 'flex' : 'none';
    });
}

function setupCardAddingButton() {
    const cardAddingButton = document.querySelector('.cardAddingButton');
    if (!cardAddingButton) return;
    
    cardAddingButton.addEventListener('click', function() {
        // Create redirect animation container if it doesn't exist
        let redirectAnimation = document.querySelector('.redirect-animation');
        
        if (!redirectAnimation) {
            redirectAnimation = document.createElement('div');
            redirectAnimation.className = 'redirect-animation';
            redirectAnimation.style.cssText = `
                display: none;
                margin-top: 10px;
                text-align: center;
            `;
            
            const animationSpinner = document.createElement('div');
            animationSpinner.className = 'animation-spinner';
            animationSpinner.style.cssText = `
                width: 30px;
                height: 30px;
                border: 3px solid rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                border-top-color: #3498db;
                animation: spin 1s ease-in-out infinite;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
            `;
            
            const redirectText = document.createElement('span');
            redirectText.className = 'redirect-text';
            redirectText.textContent = 'Redirecting...';
            redirectText.style.cssText = `
                vertical-align: middle;
                font-weight: bold;
                font-family: var(--font1);
            `;
            
            redirectAnimation.appendChild(animationSpinner);
            redirectAnimation.appendChild(redirectText);
            
            // Add spin animation to style
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            // Insert after the button
            cardAddingButton.insertAdjacentElement('afterend', redirectAnimation);
        }
        
        // Show redirect animation
        redirectAnimation.style.display = 'block';
        
        // Redirect after animation
        setTimeout(() => {
            window.location.href = 'https://forms.gle/42DhDN5GHFYiGffd7'; // Replace with your actual URL
        }, 1500);
    });
}
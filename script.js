    // Check for saved user preference or use system preference
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial state
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

function RedirectToLoginPage() {
  // Get the button element
  const button = document.getElementById('button');
  
  // Visual feedback
  button.style.opacity = '0.7';
  button.textContent = 'Going to Dashboard...';
  
  // Redirect after 1 second (1000ms)
  setTimeout(() => {
    window.location.href = "#dashboard er link hobe";
  }, 1000);
}
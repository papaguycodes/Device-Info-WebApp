// Function to toggle between light and dark themes
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    document.querySelector('#theme-style').setAttribute('href', `css/${newTheme}-theme.css`);
});


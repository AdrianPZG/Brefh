document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});





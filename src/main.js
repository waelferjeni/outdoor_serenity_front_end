// main.js

document.addEventListener('DOMContentLoaded', function () {
    const navDots = document.getElementById('nav-dots');
    const navDropdown = document.getElementById('nav-dropdown');
 
    navDots.addEventListener('click', () => {
       navDropdown.classList.toggle('show');
    });
 
    // Fermer le menu déroulant lorsque l'on clique en dehors
    window.addEventListener('click', (e) => {
       if (!navDots.contains(e.target)) {
          navDropdown.classList.remove('show');
       }
    });
 });
 
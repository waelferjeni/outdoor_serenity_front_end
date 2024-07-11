// custom.js

document.addEventListener('DOMContentLoaded', function () {
    const navDots = document.getElementById('nav-dots');
    const navDropdown = document.getElementById('nav-dropdown');
 
    navDots.addEventListener('click', (e) => {
       e.stopPropagation();
       navDropdown.classList.toggle('show');
    });
 
    // Fermer le menu déroulant lorsque l'on clique en dehors
    window.addEventListener('click', () => {
       navDropdown.classList.remove('show');
    });
 
    // Empêcher la fermeture du menu lorsqu'on clique à l'intérieur
    navDropdown.addEventListener('click', (e) => {
       e.stopPropagation();
    });
 });
 
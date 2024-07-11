function toggleMenu(menuId) {
    const menus = document.querySelectorAll('.dropdown-menu');
    menus.forEach(menu => {
        if (menu.id === menuId) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        } else {
            menu.style.display = 'none';
        }
    });
}

document.addEventListener('click', function(event) {
    const isClickInsideMenu = event.target.closest('.menu-container');
    if (!isClickInsideMenu) {
        const menus = document.querySelectorAll('.dropdown-menu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

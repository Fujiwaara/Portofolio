var navButton = document.querySelector('.nav-button');
var navMenu = document.querySelector('.nav-menu');
    
function openMenu(event) {
    
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

    event.preventDefault();
    event.stopImmediatePropagation();
}
      
function closeMenu(event) {
    if (navButton.classList.contains('active')) {

        navButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

navButton.addEventListener('click', openMenu, false);

window.addEventListener('click',closeMenu, false);
window.addEventListener('touchstart',closeMenu, false);
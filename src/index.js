import toggleMenu from './js/toggleMenu.js';
import closeMenu from './js/closeMenu.js';

const profile = document.getElementById('profile');
profile.addEventListener('click', toggleMenu);

window.addEventListener('click', closeMenu);

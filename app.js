let menuElementsToToggle = document.querySelectorAll('.toggle-menu');
let iconeToggle = document.querySelector('.icone-toggle');

let toggleMenu = () =>menuElementsToToggle.forEach(el => el.classList.toggle("hidden"));

iconeToggle.addEventListener('click', toggleMenu);
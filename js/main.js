// Mobile navigation toggle
var toggle = document.querySelector('.header__toggle');
var navList = document.querySelector('.header__nav-list');

toggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('header__nav-list--open');
    this.setAttribute('aria-expanded', isOpen);
});

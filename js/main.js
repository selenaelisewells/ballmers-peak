let mainNav = document.getElementById('mainNav');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {

    mainNav.classList.toggle('active');
});
let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks')

hamburger.addEventListener('click',
        function() {
            navLinks.classList.toggle('show');
        });
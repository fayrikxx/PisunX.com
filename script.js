document.addEventListener('DOMContentLoaded', function() {
    var contentElements = document.querySelectorAll('.content');

    function showContentOnScroll() {
        var screenPosition = window.innerHeight / 1.2;

        contentElements.forEach(function(content) {
            var contentPosition = content.getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                content.classList.add('show');
            } else {
                content.classList.remove('show');
            }
        });
    }

    showContentOnScroll(); // Call initially on page load

    window.addEventListener('scroll', showContentOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

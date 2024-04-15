document.addEventListener('DOMContentLoaded', function() {
    const contentElements = document.querySelectorAll('.content');

    function showContentOnScroll() {
        const screenPosition = window.innerHeight / 1.2;

        contentElements.forEach(content => {
            const contentPosition = content.getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                content.classList.add('show');
            } else {
                content.classList.remove('show');
            }
        });
    }

    showContentOnScroll(); // Call initially on page load

    window.addEventListener('scroll', showContentOnScroll);

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

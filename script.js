document.addEventListener('DOMContentLoaded', function() {
    var contentElements = document.querySelectorAll('.content');
    var screenPosition = window.innerHeight / 1.2; // Появление контента при достижении 1/1.2 видимой части экрана

    contentElements.forEach(function(content) {
        var contentPosition = content.getBoundingClientRect().top;
        
        if (contentPosition < screenPosition) {
            content.classList.add('show');
        }
    });
});

window.addEventListener('scroll', function() {
    var contentElements = document.querySelectorAll('.content');
    var screenPosition = window.innerHeight / 1.2; // Появление контента при достижении 1/1.2 видимой части экрана

    contentElements.forEach(function(content) {
        var contentPosition = content.getBoundingClientRect().top;
        
        if (contentPosition < screenPosition) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
});

function scrollToTop() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.querySelector('nav ul li:first-child a'); // Выбираем кнопку "Home"
    var homeSection = document.getElementById('home'); // Выбираем раздел с идентификатором "home"
    var offset = -200; // Задаем смещение вверх на 200 пикселей (можете изменить значение по вашему усмотрению)

    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        var targetPosition = homeSection.offsetTop + offset; // Вычисляем позицию целевого элемента с учетом смещения
        window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Прокручиваем к позиции целевого элемента с плавной анимацией
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var pricingButton = document.querySelector('nav ul li:nth-child(2) a'); // Выбираем кнопку "Pricing"
    var pricingSection = document.getElementById('Pricing'); // Выбираем раздел с идентификатором "Pricing"
    var offset = -400; // Задаем смещение вверх на 400 пикселей (можете изменить значение по вашему усмотрению)

    pricingButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        var targetPosition = pricingSection.offsetTop + offset; // Вычисляем позицию целевого элемента с учетом смещения
        window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Прокручиваем к позиции целевого элемента с плавной анимацией
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.querySelector('nav ul li:first-child a');
    var pricingButton = document.querySelector('nav ul li:nth-child(2) a');
    var featuresButton = document.querySelector('nav ul li:nth-child(3) a');
    var homeSection = document.getElementById('home');
    var pricingSection = document.getElementById('Pricing');
    var featuresSection = document.getElementById('features');

    homeButton.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    pricingButton.addEventListener('click', function(event) {
        event.preventDefault();
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    });

    featuresButton.addEventListener('click', function(event) {
        event.preventDefault();
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
});

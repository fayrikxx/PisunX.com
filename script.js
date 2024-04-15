document.addEventListener('DOMContentLoaded', function() {
    // Найти кнопку "Buy Now"
    const buyNowBtn = document.getElementById('buyNowBtn');

    // Найти модальное окно
    const modal = document.getElementById('myModal');

    // Найти элемент для закрытия модального окна
    const closeModal = document.getElementsByClassName('close')[0];

    // Открыть модальное окно при нажатии на кнопку "Buy Now"
    buyNowBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрыть модальное окно при нажатии на крестик
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике за его пределами
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Отправка формы (для визуального эффекта)
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвратить отправку формы

        // Получить значения полей формы
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // "Визуальная" обработка платежа (показать сообщение об успешной оплате)
        alert(`Payment Successful!\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);

        // Закрыть модальное окно после "оплаты"
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var buyNowBtn = document.querySelector('.purchase-button a'); // Находим кнопку "Buy Now"
    var modal = document.getElementById('myModal'); // Находим модальное окно
    var closeModalBtn = document.querySelector('.close'); // Находим кнопку закрытия модального окна
    var paymentForm = document.getElementById('paymentForm'); // Находим форму оплаты

    // Показываем модальное окно при клике на кнопку "Buy Now"
    buyNowBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие ссылки
        modal.style.display = 'block'; // Показываем модальное окно
    });

    // Скрываем модальное окно при клике на кнопку закрытия
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    // Скрываем модальное окно при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Скрываем модальное окно
        }
    });

    // Обработчик отправки формы оплаты (в данном случае просто выводим сообщение)
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы (только для визуала)
        alert('Payment submitted successfully!'); // Выводим сообщение об успешной оплате
        modal.style.display = 'none'; // Скрываем модальное окно
    });
});

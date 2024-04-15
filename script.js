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

// открытие основного  модального окна
const modal = document.getElementById('modal');
const openModalBtns = document.querySelectorAll('.btn-open-modal');
const closeModalBtn = document.querySelector('.close_btn');

// Открывает модальное окно
openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрывает модальное окно
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие при клике на фон
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// проверяет номер

const phoneInput = document.querySelector('#phone');
const phoneError = document.querySelector('#phone-error');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы

    // Добавляем маску только если введено больше 1 символа
    if (value.length > 0 && !value.startsWith('7')) {
        value = '7' + value; // Если не начинается с 7, то добавляем её
    }

    // Форматируем строку
    if (value.length > 1) {
        value = '+7 (' + value.substring(1, 4) + ') ' +
            value.substring(4, 7) + '-' +
            value.substring(7, 9) + '-' +
            value.substring(9, 11);
    }

    e.target.value = value.trim();
});

phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value.startsWith('+7')) {
        phoneInput.value = '+7 (';
    }
});

phoneInput.addEventListener('blur', () => {
    if (phoneInput.value === '+7 (') {
        phoneInput.value = '';
    }
});

// Проверка на обязательное заполнение перед отправкой формы
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (!phoneInput.value || phoneInput.value.length < 18) {
        e.preventDefault(); // Отменяет отправку формы
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});





// кнопка "contact sales" в модальном окне
document.querySelector('.submit_btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const flagIcon = document.getElementById('flag_icon');
    const submitButton = document.querySelector('.submit_btn');

    let allFilled = true;

    // Проверка заполненности полей
    if (!name) {
        allFilled = false;
        nameError.classList.add('error');
    } else {
        nameError.classList.remove('error');
    }

    if (!email) {
        allFilled = false;
        emailError.classList.add('error');
    } else {
        emailError.classList.remove('error');
    }

    if (!phone) {
        allFilled = false;
        phoneError.classList.add('error');
    } else {
        phoneError.classList.remove('error');
    }

    // Если есть ошибки
    if (!allFilled) {
        flagIcon.classList.add('error');
        submitButton.classList.add('error');
        console.log('Поля не заполнены. Ошибка!');
    } else {
        flagIcon.classList.remove('error');
        submitButton.classList.remove('error');
        console.log('Поля заполнены. Открытие нового модуля.');

        // Закрываем текущее модальное окно
        const currentModal = document.getElementById('modal');
        if (currentModal) {
            currentModal.style.display = 'none';
        }

        // Открываем новое модальное окно с спасибо
        const newModal = document.getElementById('new-modal');
        if (newModal) {
            newModal.style.display = 'flex'; // Показываем новое окно
        }
    }
});

// Обработчик на кнопку "Закрыть" в новом модальном окне
document.querySelector('.close-btn').addEventListener('click', function () {
    const newModal = document.getElementById('new-modal');
    if (newModal) {
        newModal.style.display = 'none'; // Скрываем новое окно
    }
});







// Принятие куки

const cookieConsent = document.getElementById('cookie-consent');
const acceptButton = document.querySelector('.cookie_accept');
const closeButton = document.querySelector('.close__cookie_btn');

function closeCookieConsent() {
    cookieConsent.style.display = 'none';
}

acceptButton.addEventListener('click', closeCookieConsent);
closeButton.addEventListener('click', closeCookieConsent);

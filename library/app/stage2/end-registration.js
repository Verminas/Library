// Окончание регистрации
// работа с localstorage
// сохранение данных в local-storage
const form = document.getElementById('form-registration');
const inputs = form.querySelectorAll('input');
//const wrapperRegister = document.querySelector('.wrapper-register');

form.addEventListener('submit', function(event) {
   // event.preventDefault(); // предотвращаю отправку формы
    // получаю все значения как пар ключ-значение и вношу их в localstorage
    inputs.forEach(function(input) {
        const key = input.id;
        const value = input.value;

        localStorage.setItem(key, value);
    });

    //  класс "no-active" к элементу wrapper-register, чтобы убрать модалку после окончания регистрации
    wrapperRegister.classList.add('no-active');

    
});

//иконка пользователя меняется на заглавные буквы имени
const initialsOfNameLastname = document.querySelector('.initials');
let firstName = localStorage.getItem('first-name');
let lastName = localStorage.getItem('last-name');

function getInitials(firstName, lastName) {
    const firstInitial = firstName[0].toUpperCase();
    const lastInitial = lastName[0].toUpperCase();
    return firstInitial + lastInitial;
  }

let initials = getInitials(firstName, lastName);

initialsOfNameLastname.textContent = initials;

//скрываю неавторизированную иконку и проявляю авторизованную
const iconNoAuth = document.querySelector('.icon-no-auth');
const wrapperIconAuth = document.querySelector('.wrapper-icon-auth.no-active');

iconNoAuth.classList.add('no-active');
wrapperIconAuth.classList.remove('no-active');


// Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа.

const cardNumberInput = document.getElementById('card-number');

// const firstName = localStorage.getItem('first-name');
// const lastName = localStorage.getItem('last-name');
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');
let cardNumberHex;
// проверка наличия непустых значений в localStorage
if (firstName && lastName && email && password) {
  // генерация случайного девятизначного числа
  let randomNumber = Math.floor(Math.random() * 900000000) + 100000000;

  // преобразование числа в формат 16-ричного числа
  cardNumberHex = randomNumber.toString(16).toUpperCase().padStart(9,'0');

  // установка сгенерированного значения в поле ввода - убираю, походу не так поняла тз
 //cardNumberInput.value = cardNumberHex;
}



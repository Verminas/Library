
// перед открытием модалки закрываю дроп-меню
// так симпатичнее выглядит
const registerButton = document.getElementById('register');

function handleClick(event) {
  drMenu.classList.add('no-active');
}

registerButton.addEventListener('click', handleClick);


// открытие модалки регистрации
const wrapperRegister = document.querySelector('.wrapper-register');
//const registerButton = document.getElementById('register');

// для удобства можно вынести все константы в отдельный js
const digitalSignUpButton = document.getElementById('digital-sign-up');
const registerCloseButton = document.getElementById('register-close-btn');

// для кнопок register и digital-sign-up
registerButton.addEventListener('click', showRegisterForm);
digitalSignUpButton.addEventListener('click', showRegisterForm);

// для кнопки register-close-btn и области вне wrapper-register
wrapperRegister.addEventListener('click', hideRegisterForm);
registerCloseButton.addEventListener('click', hideRegisterForm);

function showRegisterForm() {
  wrapperRegister.classList.remove('no-active');
}

function hideRegisterForm(event) {
  if (event.target === wrapperRegister || event.target === registerCloseButton) {
    wrapperRegister.classList.add('no-active');
  }
}

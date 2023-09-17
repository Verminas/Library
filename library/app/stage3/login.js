// скопировала из окна регистрации


// перед открытием модалки закрываю дроп-меню
// так симпатичнее выглядит
const loginButton = document.getElementById('login');

function handleClick(event) {
  drMenu.classList.add('no-active');
}

loginButton.addEventListener('click', handleClick);


// открытие модалки регистрации
const wrapperLogin = document.querySelector('.wrapper-login');


// для удобства можно вынести все константы в отдельный js
const digitalLogInButton = document.getElementById('digital-log-in');
const loginCloseButton = document.getElementById('login-close-btn');

// для кнопок log in и digital-log-in
loginButton.addEventListener('click', showLoginForm);
digitalLogInButton.addEventListener('click', showLoginForm);

// для кнопки login-close-btn и области вне wrapper-register
wrapperLogin.addEventListener('click', hideLoginForm);
loginCloseButton.addEventListener('click', hideLoginForm);

function showLoginForm() {
  wrapperLogin.classList.remove('no-active');
}

function hideLoginForm(event) {
  if (event.target === wrapperLogin || event.target === loginCloseButton) {
    wrapperLogin.classList.add('no-active');
  }
}

// сам вход в учетную запись

console.log('lol');
// 1. Меню профиля при нажатии на иконку с инициалами пользователя

//При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
initialsOfNameLastname.title = firstName + ' ' + lastName;

// 2 - 5. Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, 
// что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. 
// Меню под иконкой. +2
 // похожее уже делала во второй части, меняю код оттуда

 const drMenuWithAuth = document.querySelector('.dr-menu.with-auth');
 

// let isActive = false; эта переменная уже задана в stage 2
 //const wrapperIconAuth = document.querySelector('.wrapper-icon-auth'); // определена в index.js

if (initialsOfNameLastname && drMenuWithAuth) {
  //const img = wrapperIconAuth.querySelector('span');
  const iconWithAuth = headerImg.querySelector('div');

  iconWithAuth.addEventListener('click', function() {
    if (isActive) {
      drMenuWithAuth.classList.remove('active');
      drMenuWithAuth.classList.add('no-active');
      isActive = false;
    } else {
      drMenuWithAuth.classList.remove('no-active');
      drMenuWithAuth.classList.add('active');
      isActive = true;
    }
  });

  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!iconWithAuth.contains(targetElement)) {
      drMenuWithAuth.classList.remove('active');
      drMenuWithAuth.classList.add('no-active');
      isActive = false;
    }
  });
}

// 6. Вместо надписи Profile отображается девятизначный Card Number. 
// Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер

let textProfileWithAuth = drMenuWithAuth.querySelector('h2');
//textProfileWithAuth.textContent = ''; // изначальна была проблема с видимостью переменной, она была внутри тела условия, поэтому не получалось!!
textProfileWithAuth.textContent = cardNumberHex;
textProfileWithAuth.style.fontSize = '11.5px';

// 7. Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
// беру части из прошлой реализации модалок

// скопировала из окна регистрации


// перед открытием модалки закрываю дроп-меню
// так симпатичнее выглядит
 const profileButton = document.getElementById('profile'); // id кнопки из дроп-меню

function handleClickMenuAuth(event) {
  drMenuWithAuth.classList.add('no-active');
}

 profileButton.addEventListener('click', handleClickMenuAuth); 


// // открытие модалки профиля
 const wrapperProfile = document.querySelector('.wrapper-profile');


// // для удобства можно вынести все константы в отдельный js
// const digitalLogInButton = document.getElementById('digital-log-in');
 const profileCloseButton = document.getElementById('profile-close-btn');

// // для кнопок log in и digital-log-in
 profileButton.addEventListener('click', showProfileForm);
// digitalLogInButton.addEventListener('click', showLoginForm);

// // для кнопки login-close-btn и области вне wrapper-register
 wrapperProfile.addEventListener('click', hideProfileForm);
// loginCloseButton.addEventListener('click', hideLoginForm);

function showProfileForm() {
  wrapperProfile.classList.remove('no-active');
}

function hideProfileForm(event) {
  if (event.target === wrapperProfile || event.target === profileCloseButton) { // второе условие пока нерабочее из-за коммента кода 
    wrapperProfile.classList.add('no-active');
  }
}

// 8. Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2

const logOutButton = document.getElementById('log-out');

logOutButton.addEventListener('click', function() {
    // удаление всех данных из localStorage
    localStorage.clear();

    // перезагрузка страницы
    location.reload();
});


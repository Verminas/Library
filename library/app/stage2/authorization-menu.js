// Меню авторизации при нажатии на иконку пользователя
// Это часть задания из stage2 1.2-1.4
const drMenu = document.querySelector('.dr-menu.no-auth');
let isActive = false;

if (headerImg && drMenu) {
  const img = headerImg.querySelector('img');

  img.addEventListener('click', function() {
    if (isActive) {
      drMenu.classList.remove('active');
      drMenu.classList.add('no-active');
      isActive = false;
    } else {
      drMenu.classList.remove('no-active');
      drMenu.classList.add('active');
      isActive = true;
    }
  });

  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!headerImg.contains(targetElement)) {
      drMenu.classList.remove('active');
      drMenu.classList.add('no-active');
      isActive = false;
    }
  });
}


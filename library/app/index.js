console.log(`Вёрстка соответствует макету. Ширина экрана 768px +26/n
Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. /n
Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 /n
На ширине экрана 768рх реализовано адаптивное меню +12`);

const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation.for-burger-menu');
const headerImg = document.querySelector('.header-img');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle('_active');
    navigation.classList.toggle('_active');
    headerImg.classList.toggle('_active');
  });
}

const menuLinks = document.querySelectorAll('.navigation.for-burger-menu');
menuLinks.forEach(function(link) {
  link.addEventListener('click', menuLinkClick);
});

function menuLinkClick(e) {
  if (burgerMenu.classList.contains('_active')) {
    burgerMenu.classList.remove('_active');
    navigation.classList.remove('_active');
    headerImg.classList.remove('_active');
  }
}

// Добавляем обработчик события на весь документ
document.addEventListener('click', function(e) {
  const target = e.target;
  const isNavigation = target.closest('.navigation.for-burger-menu');
  const isBurgerMenu = target.closest('.burger-menu');
  
  // Если клик был вне меню навигации и не по иконке бургер-меню, скрываем меню
  if (!isNavigation && !isBurgerMenu) {
    burgerMenu.classList.remove('_active');
    navigation.classList.remove('_active');
    headerImg.classList.remove('_active');
  }
});

// Добавляем обработку клавиши Escape
window.addEventListener('keydown', function(event){
  if (event.key === "Escape" || event.key === "Esc"){
    burgerMenu.classList.remove('_active');
    navigation.classList.remove('_active');
    headerImg.classList.remove('_active');
  }
})

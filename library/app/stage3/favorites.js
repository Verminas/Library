// Блок Favorites
//Если пользователь ещё не вошёл в учётную запись, то 
//при нажатии на любую кнопку Buy открывается модальное окно LOGIN

//проверка наличия пустых значений в localStorage

// временно комментирую, чтобы проверить работу другого модального окна
 const buttonsBuyInFavorites = document.querySelectorAll('.favorites .button');
if (!firstName || !lastName || !email || !password) {
  buttonsBuyInFavorites.forEach(button => {
    button.addEventListener('click', showLoginForm);
  });
}
//не срабатывало изначально, т.к. файл был выше

//const buttonsBuyInFavorites = document.querySelectorAll('.favorites .button');

if (firstName ) {
  buttonsBuyInFavorites.forEach(button => {
    button.addEventListener('click', showBuyLibraryCardForm);
  });
}
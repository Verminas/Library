const libraryCardNoAuth = document.querySelector('.library-card.no-auth');
const libraryCardWithAuth = document.querySelector('.library-card.auth');

const inputReaderNameWithAuth = document.getElementById('readers-name auth');
const inputCardNumberWithAuth = document.getElementById('card-number auth');

if (firstName ) {
    libraryCardNoAuth.classList.remove('active');
    libraryCardNoAuth.classList.add('no-active');

    libraryCardWithAuth.classList.remove('no-active');
    libraryCardWithAuth.classList.add('active');

    inputReaderNameWithAuth.placeholder = firstName + ' ' + lastName;
    inputCardNumberWithAuth.placeholder = cardNumberHex;

  }
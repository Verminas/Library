
// меняю со значений по умолчанию из html на значения, введенные пользователем
let profileFirstLastName = document.querySelector('.first-last-name');
profileFirstLastName.textContent = firstName + ' ' + lastName;

let profileInitials = document.querySelector('.wrapper-initials .initials');
profileInitials.textContent = initials;

// 3. Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
let numberOfVisits  =document.getElementById('number-visits');
let visits = 23;

// это будет в самом конце
numberOfVisits.textContent = visits;
// не получается, нужно все менять и делать объект для регистрации-входа

// 4. Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2
// не получается, нужно все менять и делать объект для регистрации-входа

//5. Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2
let cardNumberMyProfile = document.querySelector('.card-numbermy-profile');
cardNumberMyProfile.textContent = cardNumberHex;

const buttonCopy = document.querySelector('.button-copy');

buttonCopy.addEventListener('click', function() {
    const cardNumber = cardNumberMyProfile.textContent;
    
    navigator.clipboard.writeText(cardNumber);
  });



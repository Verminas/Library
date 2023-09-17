// При наличии регистрации, но будучи не авторизованным
//Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2

const readersNameInput = document.getElementById('readers-name');
const buttonCheckTheCard = document.getElementById('check-the-card');
const panelWithInformation = document.getElementById('wrapper-panel-with-information');

// cardNumberHex - сгенерированный номер карты пользователя

buttonCheckTheCard.addEventListener('click', function(event) {
    event.preventDefault();
    if ((firstName + ' ' + lastName) === readersNameInput.value  && cardNumberInput.value === cardNumberHex ) {
      buttonCheckTheCard.classList.add('no-active');
      panelWithInformation.classList.remove('no-active');
    
      setTimeout(function() {
        buttonCheckTheCard.classList.remove('no-active');
        panelWithInformation.classList.add('no-active');

        readersNameInput.value = '';
        cardNumberInput.value = '';
      }, 10000);
    }
  });

  // 

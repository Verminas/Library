const wrapperBuyLibraryCard = document.querySelector('.wrapper-buy-library-card');
const buyLibraryCardCloseButton = document.getElementById('but-card-close-btn');
const buttonBuyLibraryCard = document.getElementById('button-buy-lib-card');
let score = 0;

function showBuyLibraryCardForm() {
  wrapperBuyLibraryCard.classList.remove('no-active');
  
  
  
}
// скрытие при нажатии на кнопку и области вне формы
function hideBuyLibraryCardForm(event) {
  if (
    event.target === wrapperBuyLibraryCard ||
    event.target === buyLibraryCardCloseButton
  ) {
    wrapperBuyLibraryCard.classList.add('no-active');
  };
}
// функция закончена

// функция закрытия при нажатии на кнопку бай и соблюдения всех условий
function hideBuyLibraryCardFormFromBuy(event) {
    if (
      event.target === buttonBuyLibraryCard
    ) {
      wrapperBuyLibraryCard.classList.add('no-active');
      score = score + 1;
    }
  }

// функция окончена

function checkBuyButtonState() {
  const buttonBuyLibraryCard = document.getElementById('button-buy-lib-card');
  
  if (
    bankCardNumberIsValid() &&
    expirationCodeIsValid() &&
    cvcIsValid() &&
    otherInputValid()
  ) {
    buttonBuyLibraryCard.disabled = false;
    buttonBuyLibraryCard.style.cursor = 'pointer';
    buttonBuyLibraryCard.style.color = 'black';
    buttonBuyLibraryCard.style.backgroundColor = '#bb945f';
    buttonBuyLibraryCard.style.border = '1px solid #bb945f';
  } else {
    buttonBuyLibraryCard.disabled = true;
    buttonBuyLibraryCard.style.color = 'grey';
    buttonBuyLibraryCard.style.backgroundColor = 'white';
    buttonBuyLibraryCard.style.border = '1px solid grey';
    buttonBuyLibraryCard.style.cursor = 'default';
  }
}

function bankCardNumberIsValid() {
  const bankCardNumber = document.getElementById('bank-card-nmber').value;
  const cardNumberWithoutSpaces = bankCardNumber.replace(/\s/g, ''); // удалить все пробелы
  return cardNumberWithoutSpaces.length == 16;
}

function expirationCodeIsValid() {
  const expirationCodeOne = document.getElementById('expiration-code-one').value;
  const expirationCodeTwo = document.getElementById('expiration-code-two').value;
  return expirationCodeOne.trim().length === 2 && expirationCodeTwo.trim().length === 2;
}

function cvcIsValid() {
  const cvc = document.getElementById('cvc').value;
  return cvc.trim().length === 3;
}
function otherInputValid() {
    const cardholderName = document.getElementById('cardholder-name').value;
    const postalCode = document.getElementById('postal-code').value;
    const cityTown = document.getElementById('city-town').value;
    if (cardholderName.length > 0 && postalCode.length > 0 && cityTown.length > 0 ){
      return true;
    } else return false;
  }

document.getElementById('bank-card-nmber').addEventListener('input', checkBuyButtonState);
document.getElementById('expiration-code-one').addEventListener('input', checkBuyButtonState);
document.getElementById('expiration-code-two').addEventListener('input', checkBuyButtonState);
document.getElementById('cvc').addEventListener('input', checkBuyButtonState);

wrapperBuyLibraryCard.addEventListener('click', hideBuyLibraryCardForm);
buyLibraryCardCloseButton.addEventListener('click', hideBuyLibraryCardForm);
buttonBuyLibraryCard.addEventListener('click', hideBuyLibraryCardFormFromBuy);
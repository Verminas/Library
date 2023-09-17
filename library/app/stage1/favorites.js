// получила все радио-кнопки и блоки
const radioButtons = document.querySelectorAll('input[name="radio-button"]');
const blocks = document.querySelectorAll('.card');

//  событие изменения для радио-кнопок
radioButtons.forEach(button => {
  button.addEventListener('change', () => {
    // перебор всех блоков и добавление-удаление класса .hidden в зависимости от нажатой радио-кнопки
    blocks.forEach(block => {
      if (block.classList.contains(button.value)) {
        block.classList.remove('hidden');
      } else {
        block.classList.add('hidden');
      }
    });
  });
});



// по умолчанию показываю первые четыре блока при загрузке страницы
blocks.forEach((block, index) => {
  if (index < 4) {
    block.classList.remove('hidden');
  }
});
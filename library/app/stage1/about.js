// сначала для промежутка  1400пп - до 769пп
// !!!!!ПОЕХАЛ АДАПТИВ после 1420пх!!!!
// 769 - 1440 px
// исправила css и теперь картинки появляются плавно, рабочий вариант залит на гитхаб
// document.addEventListener('DOMContentLoaded', function() {
//     if (window.innerWidth >= 769) {
    
//     const buttonOne = document.querySelector('.button.one button');
//     const buttonTwo = document.querySelector('.button.two button');
//     const buttonThree = document.querySelector('.button.three button');
//     const imageContainer = document.querySelector('.image');
  
//     const buttons = [buttonOne, buttonTwo, buttonThree];
//   // функции для проявяки картинок, изначально они все скрыты
//   // проявка идет по циклу в зависимости от порядкового номера, который хочу показать
//   // здесь же и появление-перемещение контейнера с картинками по оси Х
//     function showFirstThreeImages() {
//       let images = document.querySelectorAll('.image img');
//       for (let i = 0; i < images.length; i++) {
//         images[i].style.opacity = '0';
//       }
//       for (let j = 0; j < 3; j++) {
//         images[j].style.opacity = '1';
//       }
//       imageContainer.style.transform = 'translateX(475px)';
//     }
  
//     function showSecondThreeImages() {
//       let images = document.querySelectorAll('.image img');
//       for (let i = 0; i < images.length; i++) {
//         images[i].style.opacity = '0';
//       }
//       for (let j = 1; j < 4; j++) {
//         images[j].style.opacity = '1';
//       }
//       imageContainer.style.transform = 'translateX(0)';
//     }
  
//     function showLastThreeImages() {
//       let images = document.querySelectorAll('.image img');
//       for (let i = 0; i < images.length; i++) {
//         images[i].style.opacity = '0';
//       }
//       for (let j = 2; j < 5; j++) {
//         images[j].style.opacity = '1';
//       }
//       imageContainer.style.transform = 'translateX(-475px)';
//     }
//   // функция для кнопочек активация-цвет-курсор
//     function activateButton(button) {
//       for (let i = 0; i < buttons.length; i++) {
//         buttons[i].style.backgroundColor = '#0c0c0e';
//         buttons[i].disabled = false;
//         buttons[i].style.cursor = 'pointer';
//       }
//       button.style.backgroundColor = '#bb945f';
//       button.disabled = true;
//       button.style.cursor = 'default';
//     }
//   // дальше обработка событий по клику на кнопочку,т.е. смена картинок и статуса кнопки
//     buttonOne.addEventListener('click', function() {
//       showFirstThreeImages();
//       activateButton(buttonOne);
//     });
  
//     buttonTwo.addEventListener('click', function() {
//       showSecondThreeImages();
//       activateButton(buttonTwo);
//     });
  
//     buttonThree.addEventListener('click', function() {
//       showLastThreeImages();
//       activateButton(buttonThree);
//     });
//   // инициирую эти функции сразу, чтобы картинки 1-3 и 1-я коричневая кнопка были по умолчанию
//   // иначе отображаются сразу все 5 картинок до щелчка по кнопке
//     showFirstThreeImages();
//     activateButton(buttonOne);
// }
//   });


  // пробую вариант с изменением сдвига карусели, чтобы картинки адекватно уменьшались при изменении величины окна
  // вроде получилось, но из-за смены стилей порушилась карусель при 768 пх
  // все равно заливаю на гшитхаб
  document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 769) {
    
    const buttonOne = document.querySelector('.button.one button');
    const buttonTwo = document.querySelector('.button.two button');
    const buttonThree = document.querySelector('.button.three button');
    const imageContainer = document.querySelector('.image');
  
    const buttons = [buttonOne, buttonTwo, buttonThree];
  // функции для проявяки картинок, изначально они все скрыты
  // проявка идет по циклу в зависимости от порядкового номера, который хочу показать
  // здесь же и появление-перемещение контейнера с картинками по оси Х
    function showFirstThreeImages() {
      let images = document.querySelectorAll('.image img');
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = '0';
      }
      for (let j = 0; j < 3; j++) {
        images[j].style.opacity = '1';
      }
      imageContainer.style.transform = 'translateX(33.3%)';
    }
  
    function showSecondThreeImages() {
      let images = document.querySelectorAll('.image img');
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = '0';
      }
      for (let j = 1; j < 4; j++) {
        images[j].style.opacity = '1';
      }
      imageContainer.style.transform = 'translateX(0)';
    }
  
    function showLastThreeImages() {
      let images = document.querySelectorAll('.image img');
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = '0';
      }
      for (let j = 2; j < 5; j++) {
        images[j].style.opacity = '1';
      }
      imageContainer.style.transform = 'translateX(-33.3%)';
    }
  // функция для кнопочек активация-цвет-курсор
    function activateButton(button) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#0c0c0e';
        buttons[i].disabled = false;
        buttons[i].style.cursor = 'pointer';
      }
      button.style.backgroundColor = '#bb945f';
      button.disabled = true;
      button.style.cursor = 'default';
    }
  // дальше обработка событий по клику на кнопочку,т.е. смена картинок и статуса кнопки
    buttonOne.addEventListener('click', function() {
      showFirstThreeImages();
      activateButton(buttonOne);
    });
  
    buttonTwo.addEventListener('click', function() {
      showSecondThreeImages();
      activateButton(buttonTwo);
    });
  
    buttonThree.addEventListener('click', function() {
      showLastThreeImages();
      activateButton(buttonThree);
    });
  // инициирую эти функции сразу, чтобы картинки 1-3 и 1-я коричневая кнопка были по умолчанию
  // иначе отображаются сразу все 5 картинок до щелчка по кнопке
    showFirstThreeImages();
    activateButton(buttonOne);
}
  });


// 768 px
  // стараюсь поменять расположение блока с картинками так, чтобы они шли по оси У и возможно не мешали стрелочкам
  // рабочий вариант, залит на гитхаб, пофиксила проблему с долбаными стрелками
  document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
  
      const buttonOne = document.querySelector('.button.one button');
      const buttonTwo = document.querySelector('.button.two button');
      const buttonThree = document.querySelector('.button.three button');
      const buttonFour = document.querySelector('.button.four button');
      const buttonFive = document.querySelector('.button.five button');
      const imageContainer = document.querySelector('.image');
      const leftArrow = document.querySelector('.carret.left button');
      const rightArrow = document.querySelector('.carret.right button');

      rightArrow.style.cursor = 'pointer'; // пойдет как знчение по умолчанию до ф-ции для правой стрелки
  
      const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive];
      let activeImageIndex = 0;
      // почему-то они теперь не работают
      //imageContainer.style.transform = `translateY(1120px)`;
     imageContainer.style.transform = `translateY(200%)`;
      function showImage(index) {
        
        const images = document.querySelectorAll('.image img');
        for (let i = 0; i < images.length; i++) {
          images[i].classList.remove('active'); // Удаляем класс 'active' у всех изображений
        }
        images[index].classList.add('active'); // Добавляем класс 'active' для активного изображения
        // почему-то они теперь не работают
        // Изменение положения контейнера с изображениями
        // imageContainer.style.transform = `translateY(${1120 - index *560 }px)`;

        // не работала запись в % из-за непрвильного синтаксиса, запомни правильное описание!!
         imageContainer.style.transform = `translateY(calc(200% - ${index * 100}%))`;
      }
  
      function activateButton(button) {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.backgroundColor = '#0c0c0e';
          buttons[i].disabled = false;
          buttons[i].style.cursor = 'pointer';
        }
        button.style.backgroundColor = '#bb945f';
        button.disabled = true;
        button.style.cursor = 'default';
      }
  
      function updateArrows() {
        // Добавляем условие для установки курсора на правой стрелке при первой картинке
        if (activeImageIndex === 0) {
          leftArrow.classList.add('disabled');
          leftArrow.style.cursor = 'default';
          rightArrow.classList.remove('disabled');
          rightArrow.style.cursor = 'pointer';
        } else if (activeImageIndex === 4) {
          leftArrow.classList.remove('disabled');
          leftArrow.style.cursor = 'pointer';
          rightArrow.classList.add('disabled');
          rightArrow.style.cursor = 'default';
        } else {
          leftArrow.classList.remove('disabled');
          leftArrow.style.cursor = 'pointer';
          rightArrow.classList.remove('disabled');
          rightArrow.style.cursor = 'pointer';
        }
      }
  
      function showNextImage() {
        if (activeImageIndex < 4) {
          activeImageIndex++;
          showImage(activeImageIndex);
          activateButton(buttons[activeImageIndex]);
          updateArrows();
        }
      }
      
      function showPreviousImage() {
        if (activeImageIndex > 0) {
          activeImageIndex--;
          showImage(activeImageIndex);
          activateButton(buttons[activeImageIndex]);
          updateArrows();
        }
      }
  
      buttonOne.addEventListener('click', function() {
        activeImageIndex = 0;
        showImage(activeImageIndex);
        activateButton(buttonOne);
        updateArrows();
      });
  
      buttonTwo.addEventListener('click', function() {
        activeImageIndex = 1;
        showImage(activeImageIndex);
        activateButton(buttonTwo);
        updateArrows();
      });
  
      buttonThree.addEventListener('click', function() {
        activeImageIndex = 2;
        showImage(activeImageIndex);
        activateButton(buttonThree);
        updateArrows();
      });
  
      buttonFour.addEventListener('click', function() {
        activeImageIndex = 3;
        showImage(activeImageIndex);
        activateButton(buttonFour);
        updateArrows();
      });
  
      buttonFive.addEventListener('click', function() {
        activeImageIndex = 4;
        showImage(activeImageIndex);
        activateButton(buttonFive);
        updateArrows();
      });
  
      leftArrow.addEventListener('click', showPreviousImage);
  
      rightArrow.addEventListener('click', showNextImage);
  
      showImage(activeImageIndex);
      activateButton(buttonOne);
      leftArrow.classList.add('disabled');
    }
  }); 
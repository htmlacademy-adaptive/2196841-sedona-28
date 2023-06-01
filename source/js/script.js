let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

// удаляется класс nav--nojs
navMain.classList.remove('nav--nojs');

// отработка события "клик на объекте navToggle"
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

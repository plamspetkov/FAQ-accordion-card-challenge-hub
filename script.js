'use strict';

const question = document.querySelectorAll('.question');
const questionTitle = document.querySelectorAll('.question_title');
const arrow = document.querySelectorAll('.arrow');
const text = document.querySelectorAll('.text');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    console.log(question);
    for (let q = 0; q < text.length; q++) {
      if (i === q) {
        text[q].classList.add('.show');
        arrow[q].classList.add('.rotate');
        questionTitle[q].classList.toggle('.active');
      } else {
        text[q].classList.remove('.show');
        arrow[q].classList.remove('.rotate');
        questionTitle[q].classList.remove('.active');
      }
    }
  });
}

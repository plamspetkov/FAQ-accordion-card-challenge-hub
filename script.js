// let li = document.querySelectorAll('.faq_text li');
// for (var i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', (e) => {
//     let clickedLi;
//     if (e.target.classList.contains('question')) {
//       clickedLi = e.target.parentElement;
//     } else {
//       clickedLi = e.target.parentElement.parentElement;
//     }
//     clickedLi.classList.toggle('showAnswer');
//   });
// }

// const btn = document.querySelectorAll('.question_btn');

// btn.forEach((element) => {
// 	element.addEventListener('click', (e) => {
// 		let clickLi;
// 		if (e.target.classList.contains('answer')) {
// 			clickLi = e.target.parentElement;
// 		} else {
// 			clickLi = e.target.parentElement.parentElement;
// 		}
// 		clickLi.classList.toggle('answer_show');
// 	});
// });

// let acc = document.getElementsByClassName('question_btn');
// for (let i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener('click', function () {
// 		this.classList.toggle('active');
// 		let answer = this.nextElementSibling;
// 		if (answer.style.display === 'block') {
// 			answer.style.display = 'none';
// 		} else {
// 			answer.style.display = 'block';
// 			acc.classList.add('.question_btn:active');
// 		}
// 	});
// }

let acc = document.getElementsByClassName('question_btn');
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		// this.classList.toggle('active');
		let answer = this.nextElementSibling;
		if (answer.classList.contains('answer')) {
			answer.classList.remove('answer');
			answer.classList.add('answer_show');
		} else {
			answer.classList.add('answer');
		}
	});
}

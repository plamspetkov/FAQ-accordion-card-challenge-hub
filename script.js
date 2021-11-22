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
const button = document.querySelectorAll('.question_btn');
const acc = document.querySelectorAll('.question');
button.forEach((button) => {
	button.addEventListener('click', function handleClick(e) {
		const isOpen =
			e.target.closest('.question').classList.toggle('is-open') &&
			button.classList.toggle('is-open');
	});
});

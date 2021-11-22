const button = document.querySelectorAll('.question_btn');
const acc = document.querySelectorAll('.question');
button.forEach((button) => {
	button.addEventListener('click', function handleClick(e) {
		const isOpen = e.target.closest('.question').classList.toggle('is-open');
		acc.forEach((acc) => {
			acc.classList.remove('is-open');
		});
	});
});

const loginForm = document.querySelector(".login-form")

loginForm.addEventListener('submit', event => {
	event.preventDefault();

	const email = loginForm.elements.email.value.trim();
	const password = loginForm.password.value.trim();

	if (email && password) {
		console.log({
			email,
			password
		});

		loginForm.reset();
	} else {
		alert("All form fields must be filled in");
	}
});
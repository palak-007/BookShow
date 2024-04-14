document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    const signUpForm = document.querySelector('.sign-up-container form');
    const signInForm = document.querySelector('.sign-in-container form');

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid Indian phone number (10 digits starting with 6, 7, 8, or 9).');
        isValid = false;
    }

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = signUpForm.querySelector('input[placeholder="Name"]').value.trim();
        const phone = signUpForm.querySelector('input[placeholder="Phone"]').value.trim();
        const city = signUpForm.querySelector('input[placeholder="City"]').value.trim();
        const email = signUpForm.querySelector('input[placeholder="Email"]').value.trim();
        const password = signUpForm.querySelector('input[placeholder="Password"]').value.trim();
        const confirmPassword = signUpForm.querySelector('input[placeholder="Confirm Password"]').value.trim();

        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            isValid = false;
        }

        if (!name || !phone || !city || !password) {
            alert('Please fill in all required fields.');
            isValid = false;
        }

        if (!validatePhoneNumber(phone)) {
            alert('Please enter a valid Indian phone number (10 digits starting with 6, 7, 8, or 9).');
            isValid = false;
        }

        if (isValid) {
            signUpForm.submit();
        }
    });

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = signInForm.querySelector('input[placeholder="Email"]').value.trim();
        const password = signInForm.querySelector('input[placeholder="Password"]').value.trim();

        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!password) {
            alert('Please enter a password.');
            isValid = false;
        }
        if (isValid) {
            signInForm.submit();
        }
    });
});

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    

    if (password !== confirmPassword) {
        alert('Passwords do not match');

    } else {
        // You can send the form data to the server or perform other actions here.
        alert(`Registration successful!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
        registrationForm.reset();
    }
});

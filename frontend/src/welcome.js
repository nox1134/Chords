document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const userData = {
            username,
            password
        };

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.text())
        .then((data) => {
            if (data.includes('Username already in use')) {
                alert('Username already in use. Please choose a different username.');
            } else if (data.includes('User registered successfully')) {
                alert('User registered successfully!');
                window.location = 'http://localhost:5000/login.html';
            } else {
                alert('Registration failed. Please try again later.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }
        const userData = {
            username,
            password
        };
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.text())
        .then((data) => {
            if (data.includes('User does not exist.')) {
                alert('User does not exist, create a new account for free!');
                window.location = 'http://localhost:5000/signup.html';
            } 
            else if(data.includes('Incorrect password')){
                alert('Password entered is incorrect.');
                return;
            }
            else {
                window.location = 'http://localhost:5000/landing.html';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

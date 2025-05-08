document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login successful!');
                localStorage.setItem('userId', result.id);
                window.location.href = 'note.html';
            } else {
                alert('Login failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Could not connect to the server');
        }
    });
});

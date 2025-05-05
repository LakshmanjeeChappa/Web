document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('form');

    registrationForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const userfirstname = document.getElementById('fname').value;
        const userlastname = document.getElementById('lname').value;
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = {
            firstName: userfirstname,
            lastName: userlastname,
            emailAdress: email,
            passwd: password
        };

        try {
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Registration successful! User ID: ' + result.userId);
                registrationForm.reset();
            } else {
                alert('Error: ' + result.error);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Something went wrong while registering!');
        }
    });
});

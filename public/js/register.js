document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registerForm');
  
    registrationForm.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const firstName = document.getElementById('fname').value.trim();
      const lastName = document.getElementById('lname').value.trim();
      const email = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      try {
        const response = await fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstName, lastName, email, password })
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
  
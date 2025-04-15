document.addEventListener('DOMContentLoaded', function () {
    const loginform = document.querySelector('form');

    loginform.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginUser = {
            email: email,
            password: password
        };

        console.log(" User_Login_Credentials:", loginUser);
    });
});

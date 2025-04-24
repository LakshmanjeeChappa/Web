document.addEventListener('DOMContentLoaded', function () {
    const loginform = document.querySelector('form');

    loginform.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const emailAddress = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginUser = {
            emailAddress: emailAddress,
            passwd: password
        };

        console.log(" User_Login_Credentials:", loginUser);
    });
});

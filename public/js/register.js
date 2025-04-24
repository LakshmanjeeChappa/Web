document.addEventListener('DOMContentLoaded', function () {
    const registrationform = document.querySelector('form');

    registrationform.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
      
        const userfirstname = document.getElementById('fname').value;
        const userlastname = document.getElementById('lname').value;
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log("User_firstName:", userfirstname);
        console.log("User_lastName:", userlastname);
        console.log("emailAdress:", email);
        console.log("password:", password);

        const user = {
            firstName: userfirstname,
            lastName: userlastname,
            emailAdress: email,
            passwd: password
        };

        console.log("New_Registered_User:", user);
    });
});

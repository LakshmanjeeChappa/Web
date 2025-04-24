document.addEventListener('DOMContentLoaded', function () {
    const noteform = document.querySelector('form');

    noteform.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const noteContent = document.getElementById('postContent').value;

        const note = {
            content: noteContent
        };

        console.log("Submitted_Notes:", note);
    });
});

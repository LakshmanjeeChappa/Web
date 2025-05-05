document.addEventListener('DOMContentLoaded', function () {
    const noteform = document.querySelector('form');

    noteform.addEventListener('submit', async function (event) {
        event.preventDefault(); 

        const noteContent = document.getElementById('postContent').value.trim();
        const userId = localStorage.getItem('userId');

        if (!userId) {
            alert('Please register or log in first.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Untitled Note',
                    content: noteContent,
                    user_id: userId
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert('Note saved successfully!');
                noteform.reset();
            } else {
                alert('Note save failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error submitting note:', error);
            alert('Could not connect to the server');
        }
    });
});


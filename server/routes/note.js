document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.querySelector('form');

    noteForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const noteContent = document.getElementById('postContent').value;

        const note = {
            content: noteContent,
            user_id: 1 // You can later replace this with the actual logged-in user ID
        };

        try {
            const response = await fetch('http://localhost:3000/api/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Note submitted successfully!');
                noteForm.reset();
            } else {
                alert('Error: ' + result.error);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Something went wrong while submitting the note!');
        }
    });
});

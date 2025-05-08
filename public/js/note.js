const userId = localStorage.getItem('userId');
const noteForm = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');

noteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('postContent').value.trim();

  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, title, content })
  });

  if (res.ok) {
    alert('Note saved');
    noteForm.reset();
    loadNotes();
  } else {
    alert('Failed to save note');
  }
});

async function loadNotes() {
  const res = await fetch(`/api/notes/${userId}`);
  const notes = await res.json();
  notesList.innerHTML = '';
  notes.forEach(note => {
    notesList.innerHTML += `
      <div>
        <h3 contenteditable="true" class="editable" data-id="${note.NOTEID}" data-field="title">${note.Title}</h3>
        <p contenteditable="true" class="editable" data-id="${note.NOTEID}" data-field="content">${note.Content}</p>
        <button onclick="updateNote(${note.NOTEID})">Save</button>
        <button onclick="deleteNote(${note.NOTEID})">Delete</button>
        <hr>
      </div>
    `;
  });
}

async function deleteNote(id) {
  if (confirm('Delete this note?')) {
    await fetch(`/api/notes/${id}`, { method: 'DELETE' });
    loadNotes();
  }
}

async function updateNote(id) {
  const title = document.querySelector(`.editable[data-id="${id}"][data-field="title"]`).innerText.trim();
  const content = document.querySelector(`.editable[data-id="${id}"][data-field="content"]`).innerText.trim();
  await fetch(`/api/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });
  loadNotes();
}

window.onload = loadNotes;



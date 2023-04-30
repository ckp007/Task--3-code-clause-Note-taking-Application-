const form = document.querySelector('form');
const noteTitle = document.querySelector('#note-title');
const noteText = document.querySelector('#note-text');
const ul = document.querySelector('.notes');

// Add new note
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleText = noteTitle.value.trim();
  const noteTextValue = noteText.value.trim();
  if (titleText !== '' && noteTextValue !== '') {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    h2.textContent = titleText;
    const p = document.createElement('p');
    p.textContent = noteTextValue;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-note');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-note');
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    noteTitle.value = '';
    noteText.value = '';
  }
});

// Edit or delete note
ul.addEventListener('click', (e) => {
  const li = e.target.parentElement;
  const h2 = li.querySelector('h2');
  const p = li.querySelector('p');
  const editButton = li.querySelector('.edit-note');
  const deleteButton = li.querySelector('.delete-note');

  if (e.target === editButton) {
    const titleText = prompt('Edit title:', h2.textContent);
    const noteTextValue = prompt('Edit note:', p.textContent);
    if (titleText !== null && noteTextValue !== null) {
      h2.textContent = titleText.trim();
      p.textContent = noteTextValue.trim();
    }
  } else if (e.target === deleteButton) {
    li.remove();
  }
});

const contacts = [];
const form = document.getElementById('contactForm');
const list = document.getElementById('contactList');
const message = document.getElementById('message');


form.addEventListener('submit', addContact);
function addContact(e) {
  e.preventDefault();
  let name = document.getElementById('name').value.trim();
  let phone = document.getElementById('phone').value.trim();
  if (name === '' || phone === '') {
    alert('Completa todos los campos');
    return;
  }
  contacts.push({name: name, phone: phone});
  renderContacts();

  form.reset();
  message.classList.remove('hidden');
  setTimeout(hideMessage, 2000);
}
function hideMessage() {
  message.classList.add('hidden');
}

function renderContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  
  list.innerHTML = '';

  contacts.forEach((contact, index) => {
    const li = document.createElement('li');
    li.innerText = `${contact.name} - ${contact.phone} `;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
      contacts.splice(index, 1); 
      renderContacts(); 
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}





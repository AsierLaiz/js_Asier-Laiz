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
  const li = document.createElement('li');
  li.innerText = `${name} - ${phone}`;
  list.append(li); 
  form.reset();
  message.classList.remove('hidden');
  setTimeout(hideMessage, 2000);
}
function hideMessage() {
  message.classList.add('hidden');
}




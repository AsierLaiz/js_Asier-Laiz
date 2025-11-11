const products = [
  { name: 'Teclado', price: 25 },
  { name: 'Ratón', price: 15 },
  { name: 'Monitor', price: 120 },
  { name: 'Auriculares', price: 50 }
];
const list = document.getElementById('productList');
const search = document.getElementById('search');
const sort = document.getElementById('sort');


search.addEventListener('keyup', renderList);
sort.addEventListener('change', renderList);


function renderList() {
  let filtered = products.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()));
  
  if (sort.value === 'desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort((a, b) => a.price - b.price);
  }


  list.innerHTML = '';


  filtered.forEach(prod => {    
    const li = document.createElement('li');
    li.textContent = `${prod.name} - ${prod.price}€`;
    li.addEventListener('click',()=> selectItem(li));
    list.appendChild(li);
  });
}


function selectItem(item) {
  document.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
  item.classList.add('selected');
}


renderList();

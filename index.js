let listItem;
let listaDeProductos = document.querySelector('.list');


fetch('data.json')
.then( res => res.json())
.then((data) => {
    data.forEach(({name, price, category, image}) => {
        listItem = document.createElement('li');
        listItem.classList.add('list_item')
        const content = `
            <div class="item_details">
              <p class="item_name">${category}</p>
              <span class="item_description">${name}</span>
              <p class="item_price">$<span>${price}</span></p>
            </div>
        `
        listItem.innerHTML = content;
        listaDeProductos.appendChild(listItem);
    });
})
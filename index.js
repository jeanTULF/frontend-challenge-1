let listItem;
let listaDeProductos = document.querySelector('.list');


fetch('data.json')
.then( res => res.json())
.then((data) => {
    data.forEach(({name, price, category, image}) => {
        listItem = document.createElement('li');
        listItem.classList.add('list_item')
        const imageUrl = image.desktop;
        const content = `
            <div class="list_add">
            <img src=${imageUrl} alt=${category}>             
                <button class="list_add-button">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                </svg>
                <span>Add to Cart</span>
                </button>
            </div>
            <div class="item_details">
            <p class="item_category">${category}</p>
            <span class="item_name">${name}</span>
            <p class="item_price">$<span>${price}</span></p>
            </div>
        `
        listItem.innerHTML = content;
        listaDeProductos.appendChild(listItem);
    });
})
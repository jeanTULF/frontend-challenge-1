let listItem;
let listaDeProductos = document.querySelector('.list');
let carritoVacio = document.querySelector('.empty-img')
let carritoLleno = document.querySelector('.cart-products')
let productCart = [];
let totalValue = 0;
let totalDeProductos = document.getElementById('product-number');



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
        const addToCart = listItem.querySelector('.list_add-button');
        //AddToCart function 
        
        function compra() {
            productCart.push({name, price, image})
        }
        
        addToCart.addEventListener('click', () => {
            addToCart.classList.add('active')
            compra()
            console.log(`Added to cart: ${name}`);
            totalDeProductos.innerHTML = productCart.length;
            console.log(productCart);
        });

        /* if(productCart.length == 0) {
            carritoVacio.classList.remove('hidden')
            carritoLleno.classList.add('hidden')
        } else {
            carritoLleno.classList.remove('hidden')
            carritoVacio.classList.add('hidden')
        } */
    });
})




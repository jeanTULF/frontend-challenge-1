let listItem;
let listaDeProductos = document.querySelector('.list');
let productosCompra = document.querySelector('.product-info')
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

        function actualizarCarrito() {
            // Limpiar contenido actual
            productosCompra.innerHTML = '';
        
            // Recorrer cada producto en productCart
            productCart.forEach((producto, index) => {
                // Crear los elementos necesarios
                const productoContainer = document.createElement('div');
                productoContainer.classList.add('product-item');
        
                // Crear el contenido HTML del producto
                productoContainer.innerHTML = `
                    <h2 class="product-name">${producto.name}</h2>
                    <div class="product-details">
                        <p class="quantity">x1</p>
                        <p>@${producto.price.toFixed(2)}</p>
                        <p>$${producto.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-product" data-index="${index}">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#0F1729"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#0F1729"></path>
                        </svg>
                    </button>
                `;
        
                // Agregar el producto al contenedor del carrito
                productosCompra.appendChild(productoContainer);
            });
        
            // Mostrar u ocultar la sección de carrito vacío
            if (productCart.length === 0) {
                carritoVacio.classList.remove('hidden');
                carritoLleno.classList.add('hidden');
            } else {
                carritoVacio.classList.add('hidden');
                carritoLleno.classList.remove('hidden');
            }
        }
        
        addToCart.addEventListener('click', () => {
            addToCart.classList.add('active')
            compra()
            console.log(`Added to cart: ${name}`);
            totalDeProductos.innerHTML = productCart.length;
            actualizarCarrito();
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




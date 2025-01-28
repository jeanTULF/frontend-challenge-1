let listItem;
let listaDeProductos = document.querySelector('.list');
let productosCompra = document.querySelector('.product-info')
let carritoVacio = document.querySelector('.empty-img')
let carritoLleno = document.querySelector('.cart-products')
let productCart = [];
let totalValue = 0;
let itemQuantity = 0;
let totalDeProductos = document.getElementById('product-number');



fetch('data.json')
.then( res => res.json())
.then((data) => {
    data.forEach(({name, price, category, image, id}) => {
        listItem = document.createElement('li');
        listItem.classList.add('list_item')
        const imageUrl = image.desktop;
        const content = `
            <div class="list_add">
            <img src=${imageUrl} alt=${category}>             
                <button class="list_add-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                <g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
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
        totalDeProductos.innerHTML = 0
        const addToCart = listItem.querySelector('.list_add-button');

        
        function compra() {
            productCart.push({name, price, image, id})
            console.log(productCart.some(product => product.id === id))
        }
        

        function actualizarCarrito() {
            productosCompra.innerHTML = '';
            productCart.forEach((producto, index) => {
                const productoContainer = document.createElement('div');
                productoContainer.classList.add('product-item');
                productoContainer.innerHTML = `
                <div>
                <h2 class="product-name">${producto.name}</h2>
                    <div class="product-details">
                        <p class="quantity">x1</p>
                        <p>@${producto.price.toFixed(2)}</p>
                        <p class="total-price">$${producto.price.toFixed(2)}</p>
                    </div>
                </div>
                    <button class="remove-product" data-index="${index}">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#0F1729"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#0F1729"></path>
                        </svg>
                    </button>
                `;
                productosCompra.appendChild(productoContainer);
            });
        
            // Mostrar u ocultar la sección de carrito vacío
            const isCartEmpty = productCart.length === 0;
            carritoVacio.classList.toggle('hidden', !isCartEmpty);
            carritoLleno.classList.toggle('hidden', isCartEmpty);


        }
        
        addToCart.addEventListener('click', () => {
            addToCart.classList.add('active')
            compra()
            Swal.fire({
                toast: true,
                icon: 'success',
                title: `Añadido al carrito: ${name}`,
                position: 'bottom-right',
                animation: true,
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'styleAlert',
                },
            })
            totalDeProductos.innerHTML = productCart.length;
            actualizarCarrito();
        });
    });
})




let listItem;
let listaDeProductos = document.querySelector('.list');
let productosCompra = document.querySelector('.product-info')
let carritoVacio = document.querySelector('.empty-img')
let carritoLleno = document.querySelector('.cart-products')
let productCart = [];
let totalValue = 0;
let itemQuantity = 0;
let totalDeProductos = document.getElementById('product-number');
let totalCostoProductos = document.getElementById('product-total')

async function obtenerProductos() {
    try {
        const response = await fetch('data.json');
        const productos = await response.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

function renderizarProductos(productos) {
    listaDeProductos.innerHTML = '';
    productos.forEach(producto => {
        listItem = document.createElement('li');
        let imageUrl = producto.image
        listItem.classList.add('list_item')
        const content = `
            <div class="list_add">
                <img src=${imageUrl.desktop} alt=${producto.category}>             
                <button class="list_add-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                <g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                <span>Add to Cart</span>
                </button>
            </div>
            <div class="item_details">
            <p class="item_category">${producto.category}</p>
            <span class="item_name">${producto.name}</span>
            <p class="item_price">$<span>${producto.price}</span></p>
            </div>
        `
        listItem.innerHTML = content;
        listaDeProductos.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', obtenerProductos);
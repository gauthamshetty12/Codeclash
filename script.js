// DOM Elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');

// Load Cart Data from Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count Display
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Add Item to Cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
    updateCartCount();
}

// Handle Add to Cart Button Clicks
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            id: index, // or use a unique ID from the product data
            name: button.closest('.product').querySelector('h3').textContent,
            price: button.closest('.product').querySelector('p').textContent,
        };
        
        addToCart(product); // Add the product to the cart
    });
});

// Initial Cart Count Update on Page Load
updateCartCount();

// Filename: complexCode.js
/*
   This JavaScript file showcases a complex and elaborated code 
   that demonstrates various advanced concepts and techniques.
   It simulates an online shopping cart system with multiple functionalities.
*/

// Some global variables
const products = [
  { id: 1, name: "Phone", price: 999 },
  { id: 2, name: "Laptop", price: 1799 },
  { id: 3, name: "Headphones", price: 199 }
];
let cart = [];

// Function to display available products
function displayProducts() {
  console.log("Available Products:");
  for (const product of products) {
    console.log(`- ${product.name} ($${product.price})`);
  }
  console.log("");
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
  } else {
    console.log("Invalid product ID.");
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const index = cart.findIndex(p => p.id === productId);
  if (index !== -1) {
    const product = cart[index];
    cart.splice(index, 1);
    console.log(`${product.name} removed from cart.`);
  } else {
    console.log("Product not found in cart.");
  }
}

// Function to calculate the total price of the cart
function calculateTotalPrice() {
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  console.log(`Total price of the cart: $${total}`);
}

// Function to checkout the cart and place an order
function checkout() {
  if (cart.length === 0) {
    console.log("Cart is empty. Nothing to checkout.");
    return;
  }

  console.log("Order Summary:");
  for (const product of cart) {
    console.log(`- ${product.name} ($${product.price})`);
  }
  calculateTotalPrice();

  console.log("Thank you for your order!");
  cart = [];
}

// Function to simulate the shopping experience
function simulateShopping() {
  console.log("Welcome to our online store!");
  console.log("How can we assist you today?\n");

  displayProducts();

  addToCart(1); // Add Phone to the cart
  addToCart(5); // Invalid product ID
  addToCart(2); // Add Laptop to the cart
  removeFromCart(1); // Remove Phone from the cart

  calculateTotalPrice();

  addToCart(3); // Add Headphones to the cart
  addToCart(2); // Add Laptop to the cart

  calculateTotalPrice();

  checkout();
}

// Start the simulation
simulateShopping();
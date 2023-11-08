/*
filename: sophisticated_code.js

This code demonstrates a complex and elaborate application that uses JavaScript.
It is a fictional e-commerce website that allows users to browse products, add them to a shopping cart, and place orders.

Please note that this code is a simplified example and does not cover all possible scenarios or error handling.

*/

// Database of products
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 24.99 },
  // ... more products
];

// User shopping cart
let cart = [];

// Function to display available products
function displayProducts() {
  console.log("Available products:");
  for (const product of products) {
    console.log(`[${product.id}] ${product.name}: $${product.price}`);
  }
}

// Function to add a product to the shopping cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to the cart.`);
  } else {
    console.log("Product not found.");
  }
}

// Function to calculate the total price of the cart
function getTotalPrice() {
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return total.toFixed(2);
}

// Function to place an order
function placeOrder() {
  if (cart.length === 0) {
    console.log("Cannot place an empty order.");
    return;
  }

  const totalPrice = getTotalPrice();
  console.log(`Placing order with a total of $${totalPrice}`);

  // Implementation to process the order (example: send API request)
  // ...

  cart = []; // Empty the cart after the order is placed
  console.log("Order placed successfully.");
}

// Example usage:
displayProducts(); // Show available products

addToCart(1); // Add Product 1 to the cart
addToCart(3); // Add Product 3 to the cart

console.log(`Total price: $${getTotalPrice()}`); // Show the total price

placeOrder(); // Place the order

/* Output:
Available products:
[1] Product 1: $10.99
[2] Product 2: $19.99
[3] Product 3: $24.99
Product 1 added to the cart.
Product 3 added to the cart.
Total price: $35.98
Placing order with a total of $35.98
Order placed successfully.
*/
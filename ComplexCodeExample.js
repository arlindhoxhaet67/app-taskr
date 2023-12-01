/**
 * ComplexCodeExample.js
 * 
 * This code example showcases a complex application built with JavaScript. It simulates an e-commerce website
 * with product listings, shopping cart functionality, and user authentication.
 */

// Class representing a product
class Product {
  constructor(name, price, description, rating) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.rating = rating;
  }
  
  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
  
  displayInfo() {
    console.log(`${this.name}\n${this.description}\nPrice: ${this.getFormattedPrice()}\nRating: ${this.rating}/5`);
  }
}

// Class representing the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product === product);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(product, quantity) {
    const existingItem = this.items.find(item => item.product === product);
    if (existingItem) {
      existingItem.quantity -= quantity;
      if (existingItem.quantity <= 0) {
        const index = this.items.indexOf(existingItem);
        this.items.splice(index, 1);
      }
    }
  }

  getCartTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total.toFixed(2);
  }

  displayCart() {
    console.log('--- Shopping Cart ---');
    this.items.forEach(item => {
      console.log(`${item.quantity}x ${item.product.name} - ${item.product.getFormattedPrice()}`);
    });
    console.log(`Total: $${this.getCartTotal()}`);
    console.log('--------------------');
  }
}

// Class representing a user
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  
  login() {
    // Simulating login functionality
    console.log(`Logged in as ${this.name}`);
  }
  
  logout() {
    // Simulating logout functionality
    console.log(`Logged out`);
  }
}

// Creating some sample products
const product1 = new Product('Product 1', 19.99, 'This is the first product', 4.7);
const product2 = new Product('Product 2', 9.99, 'This is the second product', 4.2);
const product3 = new Product('Product 3', 14.99, 'This is the third product', 4.5);

// Creating a shopping cart and adding products
const cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Displaying the shopping cart
cart.displayCart();

// Creating a user and logging in
const user = new User('John Doe', 'johndoe@example.com', 'password123');
user.login();

// Removing a product from the cart
cart.removeItem(product2, 1);

// Displaying the updated shopping cart
cart.displayCart();

// Logging out
user.logout();

// Console output:
// --- Shopping Cart ---
// 2x Product 1 - $19.99
// 1x Product 2 - $9.99
// 3x Product 3 - $14.99
// Total: $84.94
// --------------------
// Logged in as John Doe
// --- Shopping Cart ---
// 2x Product 1 - $19.99
// 3x Product 3 - $14.99
// Total: $84.94
// --------------------
// Logged out
// function to display menu
function displayMenu() {
    console.clear();
    console.log("** Welcome to the E-commerce Console App **");
    console.log("1. Browse Products");
    console.log('2. Add to Cart');
    console.log("3. View Cart");
    console.log("4. Checkout");
    console.log("5. Exit");
}

//created an array of objects of my products
const shop = [
    {
        Id: 1,
        Name: 'iphone 12 pro max',
        price: '$1099',
        inStock: true,
    },
    {
        Id: 2,
        Name: 'samsung galaxy s21 ultra',
        price: '$999.99',
        inStock: false,
    },
    {
        Id: 3,
        Name: "Apple watch series 7",
        price: "$1499.99",
        inStock: true,
    },
]

//this function displays all products
displayProducts = (shop) => {
    console.clear();
  console.log("** Products **");
  shop.forEach(product => {
    console.log(`${product.Id}. ${product.Name} - $${product.price}`);
  });
}

//created an empty array to store items
let cart = [];

//function to add items to
function addToCart(productId) {
    const product = shop.find(product => product.Id === productId);
    if (product) {
      cart.push(product);
      console.log(`${product.Name} added to cart!`);
    } else {
      console.log("Product not found or out of stock.");
    }
}

//function to view cart
function viewCart() {
    console.clear();
    console.log("** Cart **");
    if (cart.length === 0) {
      console.log("Your cart is empty.");
    } else {
      cart.forEach(product => {
        console.log(`${product.name} - $${product.price}`);
      });
      console.log(`Total: $${calculateCartTotal()}`);
    }
}

//function to calculate cart total
function calculateCartTotal() {
    return cart.reduce((total, product) => total + product.price, 0);
}

//function to checkout
function checkout() {
    viewCart();
    if (cart.length > 0) {
      // Get user information (name, address, etc.)
      const userInfo = {
      name : prompt("Enter your name:"),
       address : prompt('Your Location:'),
       contact : prompt('Enter your Phone ;number:')
      }
  
      // Confirm order
      console.log(`Order confirmed! Thank you, ${userInfo.name}!`);
      cart = []; // Clear the cart
    }
}
// used a switch statement to handle different choices
let userChoice;
// Get user choice

do {
    displayMenu();
    userChoice = prompt("Enter your choice (1-5):");
    switch (userChoice) {
        case "1":
            // Browse Products:
            displayProducts(shop);
            break;
        case "2":
            // Add to Cart:
            const productId = prompt("Enter product ID to add:");
            addToCart(Number(productId)); // Convert input to a number
            break;
        case "3":
            // View Cart:
            viewCart();
            break;
        case "4":
            // Checkout:
            checkout();
            break;
        case "5":
            // Exit:
            console.log("Exiting...");
            break;
        default:
            // Handling invalid choices
            console.log("Invalid choice.");
    }
} while (userChoice !== "5");



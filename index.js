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
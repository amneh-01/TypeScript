"use strict";
const storeName = "ElectroShop";
const storeDescription = "Your favorite electronic store";
const currency = "JOD";
let availableProducts = 5;
let isOpen = true;
let productNames = ["Laptop", "Mobile Phone", "Headphones", "Keyboard", "Mouse"];
let productDetails = ["Laptop", 950, true,
    "Mobile Phone", 600, true,
    "Headphones", 100, true,
    "Keyboard", 100, false,
];
if (isOpen) {
    console.log("Store is Open");
}
else {
    console.log("Store is Closed");
}
/*--------------------------------------------------*/
let productPrice = 900;
if (productPrice > 500) {
    console.log("Expensive Product");
}
else if (100 < productPrice && productPrice < 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
/*-------------------------------------------------------*/
for (let p of productNames) {
    console.log(p);
}
/*---------------------------------------------*/
const productPrices = [650, 75, 45, 250, 120];
let Count = 0;
for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] > 100) {
        Count++;
    }
}
console.log("Products above 100:", Count);
/*------------------------------------------------*/
function calculateDiscount(price, discount) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}
console.log(calculateDiscount(100, 20));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(5));
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("Welcome to ElectroShop");
function displayProductInfo(productName, productPrice, productDescription, currency = "JOD") {
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice, currency);
    if (productDescription) {
        console.log("Description:", productDescription);
    }
}
function calculateTotalPrice(...productPrices) {
    let total = 0;
    for (let i = 0; i < productPrices.length; i++) {
        total += productPrices[i];
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150));
let products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 900
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 100
    }
];
function loadProducts() {
    let container = document.getElementById("products");
    if (container == null) {
        return;
    }
    for (let i = 0; i < products.length; i++) {
        container.innerHTML += `
            <div>
                <h3>${products[i].name}</h3>
                <p>${products[i].description}</p>
                <p>Price: ${products[i].price} USD</p>
            </div>
            <hr>
        `;
    }
}

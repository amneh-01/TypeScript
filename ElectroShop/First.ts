
const storeName: string = "ElectroShop";
const storeDescription: string = "Your favorite electronic store";
const currency: string = "JOD";

let availableProducts: number = 5;
let isOpen: boolean = true;
let productNames: String[] = [ "Laptop", "Mobile Phone", "Headphones", "Keyboard", "Mouse"] ;
let productDetails: (String|number|boolean)[] = [ "Laptop", 950, true,
                                                  "Mobile Phone", 600, true,
                                                  "Headphones", 100, true,
                                                  "Keyboard", 100, false,
                                                ] ;


if (isOpen) {

    console.log("Store is Open");

} else {

    console.log("Store is Closed");

}                                              
/*--------------------------------------------------*/

let productPrice:number = 900;
if (productPrice > 500) {

    console.log("Expensive Product");
} 
else if( 100 < productPrice && productPrice < 500) {

    console.log("Medium Price");
}
else {

    console.log("Affordable Product");
}

/*-------------------------------------------------------*/

for (let p of productNames)
{
    console.log(p);
}

/*---------------------------------------------*/
 
const productPrices: number[] = [ 650, 75,  45, 250, 120 ];

let Count: number = 0;

for (let i = 0; i < productPrices.length; i++) {

    if (productPrices[i] > 100) {

        Count++;
    }

}
console.log("Products above 100:", Count);


/*------------------------------------------------*/


function calculateDiscount(price: number, discount: number): number {

    let finalPrice = price - (price * discount / 100);

    return finalPrice;
}
console.log(calculateDiscount(100, 20));


function checkProductAvailability(quantity: number): string {

    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(5));


function displayStoreMessage(message: string): void {

    console.log(message);

}
displayStoreMessage("Welcome to ElectroShop");


function displayProductInfo( productName: string, productPrice: number, productDescription?: string, currency: string = "JOD" ): void {

    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice, currency);

    if (productDescription) {

        console.log("Description:", productDescription);
    }

}


function calculateTotalPrice(...productPrices: number[]): number {

    let total: number = 0;

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

function loadProducts(): void {

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
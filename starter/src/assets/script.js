/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
var products = [product_1, product_2, product_3];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const product_1 = {
  name: "Justin",
  price: 99,
  quantity: 6,
  productId: "92402",
  image: "../images/cherry.jpg"


};

const product_2 = {
  name: "Imani",
  price: 79,
  quantity: 4,
  productId: "09576",
  image:"../images/orange.jpg"

};

const product_3 ={
  name: "Temi",
  price: 39,
  quantity: 8,
  productId: "09892",
  image:"../images/strawberry.jpg"
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
var cart = []

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function addProductToCart(SKU)
 let productInCart = false;
 for (let i = 0; i < cart.length; i++) {
   if (cart[i].id === product.id) {
     // If the product is already in the cart, increase its quantity
     cart[i].quantity++;
     productInCart = true;
     break;
   }
 }
if (!productInCart) {
   product.quantity = 1;
   cart.push(SKU);
 }

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function increaseQuantity(SKU) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].sku === SKU) {
      // Increase the quantity of the product by 1
      cart[i].quantity++;
      break;
    }
  }
    renderCart();
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
decreaseQuantity(SKU);

function decreaseQuantity(SKU) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].sku === SKU) {
      // Decrease the quantity of the product by 1
      cart[i].quantity--;
      // If the quantity becomes 0, remove the product from the cart
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }

  // Update the cart visual by rendering the items in the cart
  renderCart();
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  // Loop through each product in the cart and add its total to the grand total
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  return total;
}
let grandTotal = cartTotal();

let totalPaid = 0;


/* Create a function called emptyCart that empties the products from the cart */
def emptyCart(cart):
  cart = []
  return cart


/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
// Add the amount paid to the totalPaid variable
totalPaid += amount;
// Calculate the grand total of the cart
let grandTotal = cartTotal();
// Return the difference between the total paid and the grand total
return totalPaid - grandTotal;
}
let change = pay();

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}

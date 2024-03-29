const products = [
    {id: 1, name: "Harina", price: 6199},
    {id: 2, name: "Vinagre de manzana", price: 3450},
    {id: 3, name: "Pimienta negra", price: 1840},
    {id: 4, name: "Leche descremada", price: 2100},
    {id: 5, name: "Docena de huevos", price: 2600}
];

// A constant variable that limits the amount of products that the user can add into its cart
const cartLimit = 10;
let cart = [];

// The cartProducts variable is created to show the user the products that are in its cart
let cartProducts = "";
// The cartTotal variable is created to show the user the total amount of money it has to pay
let cartTotal = 0;

// Every time the user deletes a product from it's cart, this function it's called to update the cart products and the total amount of money it has to pay
function showCartProducts() {
    cartProducts = "";
    cartTotal = 0;
    for (const product of cart) {
        cartTotal += product.price;
        cartProducts += "ID: " + product.id + " - " + product.name + " - $" + product.price + "\n";
    }
}

/* When the user decides to delete a product from its cart, this function it's called to show the products to the user and ask what product does it want to be deleted.
   The user chooses the product by typing its ID. If there's more than one identical product in its cart, this function will delete only the first one that encounters in the loop */
function editCartProduct(chosenProduct) {
    showCartProducts()
    chosenProduct = parseInt(prompt("EDITANDO CARRITO...\nIngresa el ID del producto que quieras eliminar de tu carrito:\n\nTus productos:\n" + cartProducts + "\nTotal: $" + cartTotal + "\nSi ya no quieres editar tu carrito ingresa 0."));
    if (chosenProduct > 0) {
        const availableProducts = [];
        for (const product of cart) {
            availableProducts.push(product.id);
        }
        if (availableProducts.includes(chosenProduct)) {
            for (const product of cart) {
                if (chosenProduct == product.id) {
                    const productIndex = cart.indexOf(product);
                    cart.splice(productIndex, 1);
                    break
                }
            }

            if (cart.length == 0) {
                alert("PRODUCTO ELIMINADO\nAhora tu carrito esta vacío.");
                buy();
            }
            else {
                editCartProduct();
            }
        }
        else {
            alert("PRODUCTO NO ENCONTRADO\nEl ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.");
            editCartProduct();
        }
    }
    else if (chosenProduct == 0) {
        buy();
    }
    else {
        alert("ERROR\nSe ha producido un error inesperado, intentalo de nuevo.");
        editCartProduct();
    }
}

/* If the user sends an empty prompt, the function "buy()" will end, and if the user's cart is not empty, this function will show the user its cart products
    and the total amount it has to pay. Otherwise, if its cart is empty, this function will only show a goodbye message */
function goodbye(chosenProduct) {
    if (chosenProduct.length == 0) {
        if (cart.length != 0) {
            showCartProducts();
            alert("COMPRA FINALIZADA\n\nEste es tu carrito:\n" + cartProducts + "\nTotal: $" + cartTotal);
            buying = false;
        }
        else {
            alert("¡Vuelve pronto!");
            buying = false;
        }
    }
    else {
        alert("ERROR\nSe ha producido un error inesperado, intentalo de nuevo.");
        buy();
    }
}

/* This function it's always called first, otherwise, the program wouldn't work well. It asks the user what product does it want to add to its cart by typing the product ID.
   Also, the user can edit its cart or finalice the shopping. */
function buy() {
    let shownProducts = "";
    for (const product of products) {
        shownProducts += "ID: " + product.id + " - " + product.name + " - $" + product.price + "\n";
    }

    let chosenProduct = prompt("COMPRANDO PRODUCTOS...\nIngresa el ID del producto que quieres añadir a tu carrito.\n\nProductos:\n" + shownProducts + '\nSi quieres editar tu carrito ingresa 0.\nSi ya has terminado de comprar no ingreses nada.');
    
    // If the user types a number between 1 and the length of the products list, and the cart is not full, the program will search the product by its ID and add it to the user's cart.
    if (chosenProduct > 0 && chosenProduct.length != 0) {
        if (chosenProduct >= 1 && chosenProduct <= products.length) {
            if (cart.length < cartLimit) {
                for (const product of products) {
                    if (chosenProduct == product.id) {
                        cart.push(product);
                        alert("PRODUCTO AÑADIDO\nSe ha añadido " + product.name + " a tu carrito.");
                        break
                    }
                }
                buy();
            }
            else {
                alert("CARRITO LLENO\nTu carrito esta lleno, elimina algún producto de tu carrito para agregar otro.");
                buy();
            }
        }
        else {
            alert("PRODUCTO NO ENCONTRADO\nEl ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.");
            buy();
        }
    }

    // If the user types 0, the function "editCartProduct()" it'll be called to start the "editing" of the user's cart.
    else if (chosenProduct == 0 && chosenProduct.length != 0) {
        if (cart.length != 0) {
            editCartProduct(chosenProduct);
        }
        else {
            alert("CARRITO VACÍO\nTu carrito esta vacío, por lo tanto, no puedes editarlo.");
            buy();
        }
    }
    else if (chosenProduct < 0) {
        alert("ERROR\nSe ha producido un error inesperado, intentalo de nuevo.");
        buy();
    }
    else {
        goodbye(chosenProduct);
    }
}

buy();
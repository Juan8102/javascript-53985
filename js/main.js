const products = [
    {id: 1, name: "Harina", price: 6199},
    {id: 2, name: "Vinagre de manzana", price: 3450},
    {id: 3, name: "Pimienta negra", price: 1840},
    {id: 4, name: "Leche descremada", price: 2100},
    {id: 5, name: "Docena de huevos", price: 2600}
];
let cart = [];

let cartProducts = "";
let cartTotal = 0;

function showCartProducts() {
    cartProducts = "";
    cartTotal = 0;
    for (const product of cart) {
        cartTotal += product.price;
        cartProducts += "ID: " + product.id + " - " + product.name + " - $" + product.price + "\n";
    }
}

function removeCartProduct(chosenProduct, message) {
    showCartProducts();
    chosenProduct = parseInt(prompt(message));
    if (chosenProduct > 0) {
        const availableProducts = [];
        for (const product of cart) {
            availableProducts.push(product.id);
        }
        if (availableProducts.includes(chosenProduct)) {
            for (const product of cart) {
                if (chosenProduct == product.id) {
                    const productIndex = cart.indexOf(product)
                    cart.splice(productIndex, 1)
                    break
                }
            }

            if (cart.length == 0) {
                alert("Producto eliminado exitosamente.\nAhora tu carrito esta vacío.")
                buy();
            }
            else {
                showCartProducts();
                message = "Producto eliminado exitosamente.\nIngresa el ID de otro producto que quieras eliminar:\n" + cartProducts + "\nTotal: $" + cartTotal;
                removeCartProduct(message);
            }
        }
        else {
            alert("El ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.")
        }
    }
    else if (chosenProduct == 0) {
        buy();
    }
    else {
        alert("El ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.")
    }
}

function buy() {
    let shownProducts = "";
    for (const product of products) {
        shownProducts += "ID: " + product.id + " - " + product.name + " - $" + product.price + "\n";
    }

    let chosenProduct = parseInt(prompt("Ingresa el ID del producto que quieres añadir a tu carrito.\n" + shownProducts + '\nSi quieres editar tu carrito ingresa 0.\nSi ya has terminado de comprar ingresa 100.'));
    if (chosenProduct != 0 && chosenProduct != 100) {
        if (chosenProduct >= 1 && chosenProduct <= products.length) {
            for (const product of products) {
                if (chosenProduct == product.id) {
                    cart.push(product);
                    alert("Se ha añadido " + product.name + " a tu carrito.")
                    break
                }
            }
            buy();
        }
        else {
            alert("El ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.")
            buy();
        }
    }
    else if (chosenProduct == 0) {
        if (cart.length != 0) {
            let message = "Ingresa el ID del producto que quieras eliminar:\n" + cartProducts + "\nTotal: $" + cartTotal + "\n  Si ya no quieres editar tu carrito ingresa 0.";
            removeCartProduct(chosenProduct, message);
        }
        else {
            alert("Tu carrito esta vacío :(")
            buy();
        }
    }
    else if (chosenProduct == 100) {
        if (cart.length != 0) {
            showCartProducts();
            alert("Este es tu carrito:\n" + cartProducts + "\nTotal: $" + cartTotal);
            buying = false;
        }
        else {
            alert("¡Vuelve pronto!");
            buying = false;
        }
    }
}

buy();
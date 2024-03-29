const products = [
    {id: 1, name: "Harina", price: 6199},
    {id: 2, name: "Vinagre de manzana", price: 3450},
    {id: 3, name: "Pimienta negra", price: 1840},
    {id: 4, name: "Leche descremada", price: 2100},
    {id: 5, name: "Docena de huevos", price: 2600}
];

const cartLimit = 10;
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

function removeCartProduct(chosenProduct) {
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
                removeCartProduct();
            }
        }
        else {
            alert("PRODUCTO NO ENCONTRADO\nEl ID que has ingresado no pertenece a ningún producto.\nIntentalo de nuevo.");
            removeCartProduct();
        }
    }
    else if (chosenProduct == 0) {
        buy();
    }
    else {
        alert("ERROR\nSe ha producido un error desconocido, intentalo de nuevo.");
        removeCartProduct();
    }
}

function buy() {
    let shownProducts = "";
    for (const product of products) {
        shownProducts += "ID: " + product.id + " - " + product.name + " - $" + product.price + "\n";
    }

    let chosenProduct = prompt("COMPRANDO PRODUCTOS...\nIngresa el ID del producto que quieres añadir a tu carrito.\n\nProductos:\n" + shownProducts + '\nSi quieres editar tu carrito ingresa 0.\nSi ya has terminado de comprar no ingreses nada.');
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
    else if (chosenProduct == 0 && chosenProduct.length != 0) {
        if (cart.length != 0) {
            removeCartProduct(chosenProduct);
        }
        else {
            alert("CARRITO VACÍO\nTu carrito esta vacío, por lo tanto, no puedes editarlo.");
            buy();
        }
    }
    else if (chosenProduct.length == 0) {
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
        alert("ERROR\nSe ha producido un error desconocido, intentalo de nuevo.");
        buy();
    }
}

buy();
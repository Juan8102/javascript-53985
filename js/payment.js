let products = JSON.parse(localStorage.products);

let cart = [];
if (localStorage.cart !== undefined) {
    let localStorageCart = JSON.parse(localStorage.cart);
    cart = localStorageCart;
}

const paymentItemsContainer = document.getElementById("payment__products__container");
const totalPriceText = document.getElementById("total__price__text");

function totalPriceCalculation() {
    const totalAPagar = cart.reduce((acc, el) => acc + el.price, 0);
    let totalPor100 = totalAPagar * 100;           //Se multiplica el total a pagar por 100 para desplazar los decimales
    let totalRedondeado = Math.round(totalPor100); //Se redondea el número multiplicado
    let total = totalRedondeado / 100;             //Se divide entre 100 para volver a la escala original
    totalPriceText.innerText = `Total price: $${total}`;
    renderProducts();
}

function renderProducts(total) {
    for (const product of cart) {
        const div = document.createElement("div");
        div.className = "payment__item";

        const imgDiv = document.createElement("div");

        let image;
        if (product.image !== "") {
            imgDiv.className = "payment__img__container";
            const img = document.createElement("img");
            img.setAttribute("src", `../${product.image}`);

            imgDiv.append(img);
            image = imgDiv;
        }
        else {
            imgDiv.className = "payment__img__replace__container";
            const p = document.createElement("p");
            p.className = "payment__img__replace__text";
            p.innerText = "Image not found"
            
            imgDiv.append(p);

            image = imgDiv;
        }

        const itemsDiv = document.createElement("div");
        itemsDiv.className = "payment__item__text__container";

        const h3 = document.createElement("h3");
        h3.innerText = product.title;
        h3.className = "payment__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${product.price}`;
        h4.className = "payment__item__text";

        itemsDiv.append(h3, h4);

        div.append(image, itemsDiv);
        paymentItemsContainer.append(div);
    }
}
totalPriceCalculation()

const confirmButton = document.getElementById("confirm__pay__button");
confirmButton.addEventListener("click", completePurchase)

function completePurchase() {
    for (const product of cart) {
        const searchProducts = products.find((el) => el.title === product.title);
        const productIndex = products.indexOf(searchProducts);
        products[productIndex].stock--;
    }

    const productsJSON = JSON.stringify(products);
    localStorage.setItem("products", productsJSON);
    localStorage.setItem("cart", "[]");
    cart = [];
}
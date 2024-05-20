let from;
const sidebarCart = document.getElementById("cart__sidebar")
if (sidebarCart.className === "1") {
    from = 1;
}
else {
    from = 2;
}

let cart = [];
const cartIndicator = document.getElementById("cart__quantity__text");
const payButton = document.getElementById("cart__payment__button");
const payLink = document.getElementById("cart__payment__link");

function getCart() {
    if (localStorage.cart !== undefined) {
        let cartLS = JSON.parse(localStorage.cart);
        cart = cartLS;
        cartIndicator.innerText = `${cart.length}`;
    }
}

//Contenedores
const cartContainer = document.getElementById("cart__sidebar__container");
const cartItemsContainer = document.getElementById("cart__sidebar__items__container");

//Elementos destinados a la estética de la página
const bodyScroll = document.getElementById("body");
const overlay = document.getElementById("cart__sidebar__overlay");

//Botones del carrito
const showCartButton = document.getElementById("show__cart__button");
const closeCartButton = document.getElementById("close__cart__button");
const emptyCartButton = document.getElementById("empty__cart__button");

// Eventos
emptyCartButton.addEventListener("click", emptyCart);
showCartButton.addEventListener("click", () => showCart(1));
closeCartButton.addEventListener("click", () => showCart(2));
overlay.addEventListener("click", () => showCart(3));

function showCart(action) {
    let cartVerified = false;

    let cartContainerClass;
    let bodyScrollClass;
    let overlayClass;
    if (action === 1) { //Si se presionó el botón de mostrar el carrito
        cartContainerClass = "shown";
        bodyScrollClass = "noscroll";
        overlayClass = "overlay";

        if (from === 1) {
            if (isAPIWorking) {
                renderCart(1);
            }
            else {
                cartVerified = true;
                const verifyCart = setInterval(() => {
                    if (isAPIWorking) {
                        renderCart();
                        clearInterval(verifyCart);
                    }
                }, 500);
            }
        }
        else {
            renderCart(2);
        }
    }
    else { //Si se presionó el botón de cerrar el carrito o se hizo click fuera del carrito
        cartContainerClass = "closed";   
        bodyScrollClass = "scroll";
        overlayClass = "no-overlay";
        
        if (cartVerified) {
            clearInterval(verifyCart);
        }
    }
    cartContainer.className = cartContainerClass;
    bodyScroll.className = bodyScrollClass;
    overlay.className = overlayClass;
}

function renderCart() {
    cartItemsContainer.innerHTML = "";
    for (const product of cart) {
        //Contenedor de toda la información del producto
        const div = document.createElement("div");
        div.className = "cart__item";

        //Imágen y texto sustituto
        const imgDiv = document.createElement("div");

        let image;
        if (product.image !== "") {
            const img = document.createElement("img");
            if (from === 1) {
                img.setAttribute("src", `${product.image}`);
            }
            else {
                img.setAttribute("src", `../${product.image}`);
            }

            imgDiv.className = "cart__img__container";

            imgDiv.append(img);
            image = imgDiv;
        }
        else { //Si el producto no tiene una imágen asignada, se sustituirá por un texto
            const p = document.createElement("p");
            p.className = "cart__img__replace__text";
            p.innerText = "Image not found"
            imgDiv.className = "cart__img__replace__container";
            
            imgDiv.append(p);

            image = imgDiv;
        }

        //Textos
        const itemsDiv = document.createElement("div");
        itemsDiv.className = "cart__item__text__container";

        const h3 = document.createElement("h3");
        h3.innerText = product.title;
        h3.className = "cart__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${product.price}`;
        h4.className = "cart__item__text";

        itemsDiv.append(h3, h4);

        //Botón
        const imgButton = document.createElement("img");
        imgButton.className = "cart__delete__item__button";
        if (from === 1) {
            imgButton.setAttribute("src", "media/trash_can.png");
        }
        else {
            imgButton.setAttribute("src", "../media/trash_can.png");
        }

        imgButton.addEventListener("click", () => {
            deleteFromCart(product);
        })

        div.append(image, itemsDiv, imgButton);
        cartItemsContainer.append(div);
    }

    if (cart.length > 0) { //Si el carrito NO está vacío, se permitirá el acceso a la página de pago y a la función de vaciar el carrito
        emptyCartButton.style.cursor = "pointer";
        payButton.style.cursor = "pointer";
        payLink.setAttribute("href", "pages/payment.html");
    }
    else { //Si el carrito está vacío, se quitará el acceso a la página de pago y a la función de vaciar el carrito
        emptyCartButton.style.cursor = "not-allowed";
        payButton.style.cursor = "not-allowed";
        payLink.setAttribute("href", "#!");
    }
    if (from === 1) {
        renderProducts(currentArray);
    }
}

function addToCart(product) {
    const searchCartProduct = cart.find((el) => el.title.toLowerCase() === product.title.toLowerCase());
    if (searchCartProduct !== undefined) { //Si el producto que se quiere agregar al carrito, ya está en él
        Toastify({
            text: `${product.title} is already in your cart`,
            duration: 4000,
            gravity: "top",
            position: "right",
            offset: {
                y: "70px",
            },
            style: {
              background: "linear-gradient(to left, red, rgb(200, 50, 50))",
              zIndex: "750",
              cursor: "auto",
            },
        }).showToast();
    }
    else { //Si el producto que se quiere agregar al carrito, NO está en él
        cart.push(product);

        const cartJson = JSON.stringify(cart);
        localStorage.setItem("cart", cartJson);

        cartIndicator.innerText = `${cart.length}`;

        Toastify({
            text: `${product.title} has been added to your cart`,
            duration: 4000,
            gravity: "top",
            position: "right",
            offset: {
                y: "70px",
            },
            style: {
              background: "linear-gradient(to left, rgb(50, 125, 50), rgb(50, 150, 50))",
              zIndex: "750",
              cursor: "auto",
            },
        }).showToast();
        if (from === 1) {
            renderProducts(currentArray);
        }
    }
}

function deleteFromCart(product) {
    const indexproduct = cart.indexOf(product);
    cart.splice(indexproduct, 1);

    const cartJSON = JSON.stringify(cart);
    localStorage.cart = cartJSON;
    cartIndicator.innerText = `${cart.length}`;

    renderCart();
}

function emptyCart() {
    if (cart.length > 0) {
        Swal.fire({
            title: "Are you sure that you want to empty your cart?",
            showCancelButton: true,
            confirmButtonText: "Confirm",
          }).then((result) => {
            if (result.isConfirmed) {
                cart.splice(0, cart.length);

                const cartJSON = JSON.stringify(cart);
                localStorage.cart = cartJSON;
                cartIndicator.innerText = `${cart.length}`;

                Toastify({
                    text: "Your cart has been emptied succesfully",
                    fontSize: "12px",
                    duration: 4000,
                    gravity: "top",
                    position: "right",
                    offset: {
                        x: "16px",
                        y: "70px",
                    },
                    style: {
                        background: "linear-gradient(to left, rgb(50, 125, 50), rgb(50, 150, 50))",
                        cursor: "auto",
                    },
                }).showToast();

                Swal.fire("Cart emptied!", "Your cart has been emptied successfully.", "success");
                renderCart();
            }
        });
    }
}
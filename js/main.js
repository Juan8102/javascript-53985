let isAPIWorking;

let currentArray;
const products = JSON.parse(localStorage.products);
function getProducts() {
    return new Promise((resolve, reject) => {
        const APIError = Math.random();

        setTimeout(() => {
            if (APIError > 0.05) {
                resolve({products: products})
            }
            else {
                reject()
            }
        }, 2000);
    })
}
const APIResponse = getProducts();

APIResponse
    .then((response) => {
        currentArray = response.products;
        isAPIWorking = true;
        resultsIndicator.style.display = "block";
        
        renderProducts(currentArray);
        verifyPage();
    })
    .catch(() => {
        isAPIWorking = false;
        errorLoadingScreen();
    });

//Simulación de un error en la API
const loadingContainer = document.getElementById("loading__container");
const loadingElements = document.getElementById("loading__elements");
const loadingIcon = document.getElementById("loading__icon");

function errorLoadingScreen() {
    loadingIcon.setAttribute("color", "yellow");
    setTimeout(() => {
        loadingIcon.setAttribute("color", "red");
        setTimeout(() => {
            loadingElements.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="red"><path d="M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
                <h3>API load time exceeded</h3>
                <h4>Try reloading the page</h4>
            `;
        }, 1000);
    }, 1000);
}

function loadingScreen() {
    productsContainer.innerHTML = "";
    loadingElements.innerHTML = `
        <l-ring id="loading__icon"
            size="42"
            stroke="3"
            bg-opacity="0"
            speed="2"
            color="white" 
        ></l-ring>
        <h3>Loading...</h3>
    `;
    setTimeout(() => {
        renderProducts(currentArray);
    }, 1000);
}

//Renderización de productos
const productsContainer = document.getElementById("cards__container");

let renderStart = 0;
let renderEnd = 20;
function renderProducts(array) {
    loadingElements.innerHTML = "";
    productsContainer.innerHTML = "";

    array = array.slice(renderStart, renderEnd);

    for (const product of array) {
        if (product.stock > 0) {
            //Contenedor de toda la información del producto
            const div = document.createElement("div");
            div.className = "card";

            //Imágen y texto sustituto
            const imgDiv = document.createElement("div");
            imgDiv.id = "product__image__container";

            let image;
            if (product.image !== "") { //Si el producto no tiene una imágen asignada, se sustituirá por un texto
                const img = document.createElement("img");
                img.setAttribute("src", `${product.image}`);
                img.id = "card__img";
                image = img;
            }
            else {
                const div = document.createElement("div");
                const p = document.createElement("p");

                p.innerText = "Image not found"
                p.id = "img__replace__text";

                div.id = "img__replace";
                div.append(p);
                image = div;
            }
            imgDiv.append(image);

            //Textos
            const textsDiv = document.createElement("div");

            const h3 = document.createElement("h3");
            h3.innerText = product.title;
            
            const h4 = document.createElement("h4");
            h4.innerText = `$${product.price}`;

            const p = document.createElement("p");
            p.innerText = `Stock: ${product.stock}`;

            textsDiv.append(h3, h4, p);

            //Botón
            const isProductInCart = cart.find((el) => el.title === product.title);
            if (isProductInCart === undefined) {
                const button = document.createElement("button");
                button.className = "card__button";

                const imgButton = document.createElement("img");
                imgButton.setAttribute("src", "media/add-to-cart.png");

                button.append(imgButton);
                button.addEventListener("click", () => {
                    addToCart(product);
                })

                textsDiv.append(button);
            }

            div.append(imgDiv, textsDiv);
            productsContainer.append(div);
        }
    }
}

//Gestión de páginas
let pageNumber = 0;
const pageText = document.getElementById("cards__footer__text");
const nextPage = document.getElementById("cards__footer__previous-page__link");
const previousPage = document.getElementById("cards__footer__next-page__link");
nextPage.addEventListener("click", () => pageManager(1));
previousPage.addEventListener("click", () => pageManager(2));

function pageManager(action) {
    productsContainer.innerHTML = "";

    if (action === 1) { //Si se presionó el botón que lleva a la página anterior
        if (renderStart !== 0) {
            pageNumber--;
            pageText.innerText = `${pageNumber}`;
            
            //Se actualizan los límites de renderización
            renderStart = renderStart - 20;
            renderEnd = renderEnd - 20;

            verifyPage(1);
        }
    }
    else { //Si se presionó el botón que lleva a la página siguiente
        if (renderEnd < currentArray.length) {
            pageNumber++;
            pageText.innerText = `${pageNumber}`;

            renderStart = renderStart + 20;
            renderEnd = renderEnd + 20;

            verifyPage(1);
        }
    }
}

function verifyPage(action) {
    pageText.style.display = "block";
    if (action === 3) { //Si se aplica el filtro de precio se vuelve a la primera página
        //Se reestablecen los límites de renderización
        renderStart = 0;
        renderEnd = 20;
        
        pageNumber = 0; //Se reestablece el número de la página actual
        pageText.innerText = pageNumber;
        loadingScreen();
    }
    
    //Página anterior
    if (renderStart === 0) { //Si los límites de renderización son iniciales no se podrá volver a la página anterior
        nextPage.style.display = "none";
    }
    else { //En el caso de que los límites de renderización no sean iniciales se permitirá volver a la página anterior
        nextPage.style.display = "block";
    }

    //Página siguiente
    if (renderEnd > currentArray.length) {
        previousPage.style.display = "none";
    }
    else {
        previousPage.style.display = "block";
    }

    if (action === 1) { //Si se presionó alguno de los dos botones que gestionan las páginas
        loadingScreen();
    }
}

//Filtros
const resultsIndicator = document.getElementById("filters__indicator");
const priceRangeText = document.getElementById("price__range__text");
const priceRangeSlider = document.getElementById("price__range");
setTimeout(() => {
    if (isAPIWorking) {
        priceRangeSlider.addEventListener("change", filterByPrice);
        priceRangeSlider.addEventListener("input", () => {
            const priceRange = priceRangeSlider.value * 6;
            if (priceRange !== 0) {
                priceRangeText.innerText = `Less than $${priceRange}`;
            }
            else {
                priceRangeText.innerText = "Any price";
            }
        });
    }
}, 2000);

function filterByPrice() {
    const priceRange = priceRangeSlider.value * 6;
    if (priceRange !== 0) { //Si el filtro de price es aplicado, se realizará el filtrado correspondiente
        currentArray = products.filter((el) => el.price <= priceRange);
        setTimeout(() => {
            resultsIndicator.innerText = `${currentArray.length} results`;
        }, 1000);
        verifyPage(3);
    }
    else { //Si el filtro de price no es aplicado, se mostrarán todos los products
        setTimeout(() => {
            resultsIndicator.innerText = "All games";
        }, 1000);
        currentArray = products;
        verifyPage(3);
    }
}

// Sistema de carrito
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
getCart();

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
    let cartContainerClass;
    let bodyScrollClass;
    let overlayClass;
    if (action === 1) { //Si se presionó el botón de mostrar el carrito
        cartContainerClass = "shown";
        bodyScrollClass = "noscroll";
        overlayClass = "overlay";
    }
    else { //Si se presionó el botón de cerrar el carrito o se hizo click fuera del carrito
        cartContainerClass = "closed";   
        bodyScrollClass = "scroll";
        overlayClass = "no-overlay";
    }
    cartContainer.className = cartContainerClass;
    bodyScroll.className = bodyScrollClass;
    overlay.className = overlayClass;

    renderCart();
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
        if (product.image !== "") { //Si el producto no tiene una imágen asignada, se sustituirá por un texto
            const img = document.createElement("img");
            img.setAttribute("src", `${product.image}`);
            imgDiv.className = "cart__img__container";

            imgDiv.append(img);
            image = imgDiv;
        }
        else {
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
        imgButton.setAttribute("src", "media/trash_can.png");
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
    renderProducts(currentArray);
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
        renderProducts(currentArray);
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

//Busqueda de productos
const searchProductsContainer = document.getElementById("search__bar__games");
const searchBar = document.getElementById("search__bar");
setTimeout(() => {
    if (isAPIWorking) {
        searchBar.addEventListener("input", searchProducts);
        searchBar.addEventListener("focus", searchProducts);
        searchBar.addEventListener("blur", () => {
            if (searchBar.value.length === 0) {
                setTimeout(() => {
                    searchProductsContainer.innerHTML = "";
                }, 250);
            }
        });
    }
}, 2000);

function searchProducts() {
    if (searchBar.value.length > 0) {
        setTimeout(() => {
            searchProductsContainer.innerHTML = "";
            const foundProducts = products.filter((el) => el.title.toLowerCase().includes(searchBar.value.toLowerCase()));
            for (const product of foundProducts) {
                //Contenedor de toda la información de los productos buscados
                const div = document.createElement("div");
                div.className = "search__bar__games__item";

                //Contenedor de los textos
                const textsDiv = document.createElement("div");

                const h4 = document.createElement("h4");
                h4.innerText = `${product.title}`;

                h4.className = "search__bar__games__item__texts";

                const h5 = document.createElement("h5");
                h5.innerText = `$${product.price}`;
                h5.className = "search__bar__games__item__texts";

                const h52 = document.createElement("h5");
                h52.innerText = `Stock: ${product.stock}`;
                h52.className = "search__bar__games__item__texts";

                textsDiv.append(h4, h5, h52);

                //Botón
                const imgButton = document.createElement("img");
                imgButton.id = "search__add__to__cart__button";
                imgButton.setAttribute("src", "media/white-add-to-cart.png");
                imgButton.addEventListener("click", () => {
                    addToCart(product);
                })

                div.append(textsDiv, imgButton);           
                searchProductsContainer.append(div);
            }
        }, 250);
    }
}
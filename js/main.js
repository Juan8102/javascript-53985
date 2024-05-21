//Función que obtiene los productos del archivo products.json
function getJSONProducts() {
    fetch("../products.json")
    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {
        products = responseJSON;
        currentArray = products;

        const APIError = Math.random();
        setTimeout(() => {
            if (APIError > 0.05) {
                resolveAPI();
            }
            else {
                errorLoadingScreen();
            }
        }, 2000);
    })
}
getJSONProducts();

//Simulación de un error en la API
let isAPIWorking = false;
const loadingContainer = document.getElementById("loading__container");
const loadingElements = document.getElementById("loading__elements");
const loadingIcon = document.getElementById("loading__icon");

function resolveAPI() {
    isAPIWorking = true;
    resultsIndicator.style.display = "block";
    
    getCart();
    renderProducts(currentArray);
    verifyPage();
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

function errorLoadingScreen() {
    loadingIcon.setAttribute("color", "yellow");
    setTimeout(() => {
        const APIError = Math.random();
        if (APIError > 0.5) {
            resolveAPI();
        }
        else {
            loadingIcon.setAttribute("color", "red");
            setTimeout(() => {
                loadingElements.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="red"><path d="M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
                    <h3>API load time exceeded</h3>
                    <h4>Try reloading the page</h4>
                `;
            }, 500);
        }
    }, 1000);
}

//Renderización de productos
let products;
let currentArray;
const productsContainer = document.getElementById("cards__container");

let renderStart = 0;
let renderEnd = 20;
function renderProducts(array) {
    loadingElements.innerHTML = "";
    productsContainer.innerHTML = "";

    array = array.slice(renderStart, renderEnd);

    for (const product of array) {
        if (product.available) {
            //Contenedor de toda la información del producto
            const div = document.createElement("div");
            div.className = "card";

            //Imágen y texto sustituto
            const imgDiv = document.createElement("div");
            imgDiv.className = "product__image__container";

            const img = document.createElement("img");
            img.setAttribute("src", `${product.image}`);
            img.setAttribute("title", `${product.title}'s logo`);
            img.className = "card__img";
            imgDiv.append(img);

            //Textos
            const allTextsContainer = document.createElement("div");
            allTextsContainer.className = "all__texts__container";

            const textsContainer = document.createElement("div");

            const productTitle = document.createElement("h3");
            productTitle.innerText = product.title;
            
            const productPrice = document.createElement("h4");
            productPrice.innerText = `$${product.price}`;

            textsContainer.append(productTitle, productPrice);
            allTextsContainer.append(textsContainer);

            //Botones
            const buttonsDiv = document.createElement("div");
            buttonsDiv.className = "card__buttons__container";

            //Botón de agregar al carrito
            const addToCartButton = document.createElement("button");
            addToCartButton.className = "card__button";

            const imgButton = document.createElement("img");
            imgButton.setAttribute("src", "media/add-to-cart.png");

            addToCartButton.append(imgButton);
            addToCartButton.addEventListener("click", () => {
                addToCart(product);
            })

            //Botón de detalles del producto
            const detailsLink = document.createElement("a");
            detailsLink.setAttribute("href", "pages/productDetails.html");
            detailsLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="white"><path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z"/></svg>`;

            detailsLink.addEventListener("click", () => {
                localStorage.setItem("chosenProduct", JSON.stringify(product));
            });

            const isProductInCart = cart.find((el) => el.title === product.title);
            if (isProductInCart !== undefined) {
                addToCartButton.className = "cart__card__button";
            }

            buttonsDiv.append(addToCartButton, detailsLink);
            allTextsContainer.append(buttonsDiv);

            div.append(imgDiv, allTextsContainer);
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

function filterByPrice() {
    if (isAPIWorking) {
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
}

//Busqueda de productos
const searchProductsContainer = document.getElementById("search__bar__games");
const searchBar = document.getElementById("search__bar");
searchBar.addEventListener("input", searchProducts);
searchBar.addEventListener("focus", searchProducts);
searchBar.addEventListener("blur", () => {
    if (isAPIWorking) {
        if (searchBar.value.length === 0) {
            setTimeout(() => {
                searchProductsContainer.innerHTML = "";
            }, 250);
        }
    }
});

function searchProducts() {
    if (isAPIWorking) {
        if (searchBar.value.length > 0) {
            setTimeout(() => {
                searchProductsContainer.innerHTML = "";
                const foundProducts = products.filter((el) => el.title.toLowerCase().includes(searchBar.value.toLowerCase()));
                for (const product of foundProducts) {
                    if (product.available) {
                        //Contenedor de toda la información de los productos buscados
                        const div = document.createElement("div");
                        div.className = "search__bar__games__item";
        
                        //Contenedor de los textos
                        const textsDiv = document.createElement("div");

                        const productTitleLink = document.createElement("a");
                        productTitleLink.setAttribute("href","../pages/productDetails.html");

                        const productTitleText = document.createElement("h4");
                        productTitleText.innerText = `${product.title}`;
                        productTitleText.className = "search__bar__games__item__texts";

                        productTitleLink.append(productTitleText);

                        const priceText = document.createElement("h5");
                        priceText.innerText = `$${product.price}`;
                        priceText.className = "search__bar__games__item__texts";
        
                        productTitleLink.addEventListener("click", () => {
                            localStorage.setItem("chosenProduct", JSON.stringify(product));
                        });

                        textsDiv.append(productTitleLink, priceText);
                        div.append(textsDiv);  

                        //Botón
                        const isProductInCart = cart.find((el) => el.title === product.title)
                        if (isProductInCart === undefined) {
                            const imgButton = document.createElement("img");
                            imgButton.className = "search__add__to__cart__button";
                            imgButton.setAttribute("src", "media/white-add-to-cart.png");
                            imgButton.addEventListener("click", () => {
                                addToCart(product);
                            })
            
                            div.append(imgButton);
                        }

                        searchProductsContainer.append(div);
                    }
                }
            }, 250);
        }
    }
}

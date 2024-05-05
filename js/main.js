const productos = [
    {image: "media/products/astro.jpg", titulo: "Astroneer",              categoria1: "Espacio",          categoria2: "Mundo abierto",          precio: 5.99,  stock: 20},
    {image: "media/products/f4.png",    titulo: "Fallout 4",              categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 11.99, stock: 17},
    {image: "media/products/hell2.png", titulo: "Helldivers II",          categoria1: "Futurista",        categoria2: "Acción",                 precio: 39.99, stock: 31},
    {image: "media/products/demo.png",  titulo: "Demonologist",           categoria1: "Terror",           categoria2: "Misterio",               precio: 7.99,  stock: 35},
    {image: "",                         titulo: "Resident Evil 7",        categoria1: "Terror",           categoria2: "Acción",                 precio: 19.99, stock: 22},
    {image: "",                         titulo: "Back 4 Blood",           categoria1: "Zombis",           categoria2: "FPS",                    precio: 29.99, stock: 14},
    {image: "media/products/rdr2.png",  titulo: "Red Dead Redemption 2",  categoria1: "Buena trama",      categoria2: "Mundo abierto",          precio: 69.99, stock: 28},
    {image: "",                         titulo: "Baldur's Gate 3",        categoria1: "Rol",              categoria2: "Decisiones",             precio: 34.99, stock: 20},
    {image: "",                         titulo: "Far Cry 5",              categoria1: "Mundo abierto",    categoria2: "FPS",                    precio: 47.99, stock: 23},
    {image: "",                         titulo: "Resident Evil 2",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 32},
    {image: "",                         titulo: "The Mortuary Assistant", categoria1: "Terror",           categoria2: "Misterio",               precio: 12.49, stock: 16},
    {image: "",                         titulo: "Fallout: New Vegas",     categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 5.99,  stock: 12},
    {image: "",                         titulo: "Resident Evil Village",  categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 46},
    {image: "",                         titulo: "Content Warning",        categoria1: "Terror",           categoria2: "Exploración",            precio: 4.49,  stock: 35},
    {image: "",                         titulo: "Hogwarts Legacy",        categoria1: "Fantasía",         categoria2: "Mundo abierto",          precio: 29.99, stock: 11},
    {image: "",                         titulo: "Lethal Company",         categoria1: "Terror",           categoria2: "Exploración",            precio: 5.79,  stock: 47},
    {image: "",                         titulo: "Cyberpunk 2077",         categoria1: "Futurista",        categoria2: "Mundo abierto",          precio: 44.99, stock: 19},
    {image: "media/products/f76.png",   titulo: "Fallout 76",             categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 4.79,  stock: 24},
    {image: "",                         titulo: "Hunt: Showdown",         categoria1: "Viejo oeste",      categoria2: "FPS",                    precio: 18.99, stock: 45},
    {image: "",                         titulo: "Resident Evil 4 (2005)", categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 36},
    {image: "",                         titulo: "Buckshot Roulette",      categoria1: "Suspenso",         categoria2: "Estrategia",             precio: 1.49,  stock: 12},
    {image: "",                         titulo: "Sons Of The Forest",     categoria1: "Terror",           categoria2: "Supervivencia",          precio: 14.99, stock: 18},
    {image: "",                         titulo: "Far Cry 6",              categoria1: "Mundo abierto",    categoria2: "FPS",                    precio: 47.99, stock: 37},
    {image: "",                         titulo: "Detroit: Become Human",  categoria1: "Futurista",        categoria2: "Decisiones",             precio: 31.99, stock: 44},
    {image: "",                         titulo: "Resident Evil 4",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 26},
    {image: "",                         titulo: "DOOM Eternal",           categoria1: "FPS",              categoria2: "Acción",                 precio: 23.99, stock: 11},
    {image: "",                         titulo: "Project Zomboid",        categoria1: "Zombis",           categoria2: "Mundo abierto",          precio: 10.49, stock: 28},
    {image: "",                         titulo: "Metro Exodus",           categoria1: "Buena trama",      categoria2: "Acción",                 precio: 22.99, stock: 33},
    {image: "",                         titulo: "Shadows of Doubt",       categoria1: "Buena trama",      categoria2: "Cyberpunk",              precio: 9.99,  stock: 31},
    {image: "",                         titulo: "It Takes Two",           categoria1: "Cooperativo",      categoria2: "Buena trama",            precio: 39.99, stock: 18},
    {image: "",                         titulo: "Resident Evil 3",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 21},
    {image: "",                         titulo: "Balatro",                categoria1: "Cartas",           categoria2: "Estrategia",             precio: 5.99,  stock: 29},
];

//Renderización de productos
const contenedorProductos = document.getElementById("cards__container");

function renderizarProductos(array) {
    contenedorProductos.innerHTML = "";

    for (const producto of array) {
        const div = document.createElement("div");
        div.className = "card";

        const imgDiv = document.createElement("div");
        imgDiv.id = "product__image__container";

        let image;
        if (producto.image !== "") {
            const img = document.createElement("img");
            img.setAttribute("src", `${producto.image}`);
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

        const textsDiv = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;

        const p = document.createElement("p");
        p.innerText = `Stock: ${producto.stock}`;

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "card__overlay__container";

        const button = document.createElement("button");
        button.className = "card__button";

        const imgButton = document.createElement("img");
        imgButton.setAttribute("src", "media/add-to-cart.png");

        button.append(imgButton);
        button.addEventListener("click", () => {
            agregarAlCarrito(producto);
        })

        const overlayText = document.createElement("p");
        overlayText.id = `card__overlay__text${array.indexOf(producto)}`;
        overlayText.className = "closed__card__overlay__text";
        buttonDiv.append(button, overlayText);

        textsDiv.append(h3, h4, p, buttonDiv);

        div.append(imgDiv, textsDiv);
        contenedorProductos.append(div);
    }
}
renderizarProductos(productos);

//Filtros
const textoRangoPrecio = document.getElementById("price__range__text");
const sliderRangoPrecio = document.getElementById("price__range");
sliderRangoPrecio.addEventListener("input", filtrarPorPrecio)

let productosFiltradosPorPrecio = [];
function filtrarPorPrecio() {
    productosFiltradosPorPrecio = [];
    const rangoPrecio = sliderRangoPrecio.value * 6;
    if (rangoPrecio !== 0) {
        textoRangoPrecio.innerText = `Less than $${rangoPrecio}`;
        productosFiltradosPorPrecio = productos.filter((el) => el.precio <= rangoPrecio);
        renderizarProductos(productosFiltradosPorPrecio);
    }
    else {
        textoRangoPrecio.innerText = "Any price";
        renderizarProductos(productos);
    }
}

//Cambio de páginas


// Sistema de carrito
let carrito = [];
const indicadorCantidadJuegos = document.getElementById("cart__quantity__text");
if (localStorage.carrito !== undefined) {
    let carritoLS = JSON.parse(localStorage.carrito);
    carrito = carritoLS;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
}

//Variables
const contenedorCarrito = document.getElementById("cart__sidebar__container");
const contenedorItemsCarrito = document.getElementById("cart__sidebar__items__container");

const scrollCuerpo = document.getElementById("body");
const overlay = document.getElementById("cart__sidebar__overlay");
const botonMostrarCarrito = document.getElementById("show__cart__button");
const botonCerrarCarrito = document.getElementById("close__cart__button");
const botonVaciarCarrito = document.getElementById("empty__cart__button");

// Eventos
botonVaciarCarrito.addEventListener("click", vaciarCarrito);
botonMostrarCarrito.addEventListener("click", () => verCarrito(1));
botonCerrarCarrito.addEventListener("click", () => verCarrito(2));
overlay.addEventListener("click", () => verCarrito(3));

function verCarrito(action) {
    let claseContenedorCarrito;
    let claseScrollCuerpo;
    let claseOverlay;
    if (action === 1) {
        claseContenedorCarrito = "shown";
        claseScrollCuerpo = "noscroll";
        claseOverlay = "overlay";
    }
    else {
        claseContenedorCarrito = "closed";   
        claseScrollCuerpo = "scroll";
        claseOverlay = "no-overlay";
    }
    contenedorCarrito.className = claseContenedorCarrito;
    scrollCuerpo.className = claseScrollCuerpo;
    overlay.className = claseOverlay;
    renderizarCarrito();
}

function agregarAlCarrito(producto) {
    const todosLosOverlays = document.getElementsByClassName("show__card__overlay__text");
    for(const texto of todosLosOverlays) {
        texto.className = "closed__card__overlay__text";
    }

    const cardOverlayText = document.getElementById(`card__overlay__text${productos.indexOf(producto)}`);
    const buscarProductoCarrito = carrito.find((el) => el.titulo.toLowerCase() === producto.titulo.toLowerCase());
    if (buscarProductoCarrito !== undefined) {
        cardOverlayText.innerText = "You already have this product in your cart.";
        cardOverlayText.className = "show__card__overlay__text";
    }
    else {
        carrito.push(producto);
        const carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        indicadorCantidadJuegos.innerText = `${carrito.length}`;
        cardOverlayText.innerText = `Product added to your cart.`;
        cardOverlayText.className = "show__card__overlay__text";
    }
}

function renderizarCarrito() {
    contenedorItemsCarrito.innerHTML = "";
    for (const producto of carrito) {
        const div = document.createElement("div");
        div.id = "cart__item";

        const imgDiv = document.createElement("div");

        let image;
        if (producto.image !== "") {
            const img = document.createElement("img");
            img.setAttribute("src", `${producto.image}`);
            imgDiv.id = "cart__img__container";

            imgDiv.append(img);
            image = imgDiv;
        }
        else {
            const p = document.createElement("p");
            p.id = "cart__img__replace__text";
            p.innerText = "Image not found"
            imgDiv.id = "cart__img__replace__container";
            
            imgDiv.append(p);

            image = imgDiv;
        }

        const itemsDiv = document.createElement("div");
        itemsDiv.id = "cart__item__texts";

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        h3.className = "cart__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;
        h4.className = "cart__item__text";

        const h42 = document.createElement("p");
        h42.innerText = `Quantity: ${producto.stock}`;
        h42.className = "cart__item__text";

        itemsDiv.append(h3, h4, h42);

        const imgButton = document.createElement("img");
        imgButton.id = "cart__delete__item__button";
        imgButton.setAttribute("src", "media/trash_can.png");
        imgButton.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        })

        div.append(image, itemsDiv, imgButton);
        contenedorItemsCarrito.append(div);
    }
    renderizarProductos(productos);
}

function vaciarCarrito() {
    carrito.splice(0, carrito.length);
    const carritoJSON = JSON.stringify(carrito);
    localStorage.carrito = carritoJSON;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
    renderizarCarrito();
}

function eliminarDelCarrito(producto) {
    const indexProducto = carrito.indexOf(producto);
    carrito.splice(indexProducto, 1);
    const carritoJSON = JSON.stringify(carrito);
    localStorage.carrito = carritoJSON;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
    renderizarCarrito();
}

//Busqueda de productos
const contenedorProductosBusqueda = document.getElementById("search__bar__games");
const barraDeBusqueda = document.getElementById("search__bar");
barraDeBusqueda.addEventListener("input", busquedaProductos);

function busquedaProductos() {
    contenedorProductosBusqueda.innerHTML = "";
    if (barraDeBusqueda.value.length > 0) {
        const productosEncontrados = productos.filter((el) => el.titulo.toLowerCase().includes(barraDeBusqueda.value.toLowerCase()));
        for (const producto of productosEncontrados) {
            const div = document.createElement("div");
            div.className = "search__bar__games__item";

            const textsDiv = document.createElement("div");

            const h4 = document.createElement("h4");
            h4.innerText = `${producto.titulo}`;

            const indexProducto = carrito.indexOf(producto);
            if (carrito[indexProducto] === producto) {
                h4.innerText += " (in your cart)";
            }

            h4.className = "search__bar__games__item__texts";

            const h5 = document.createElement("h5");
            h5.innerText = `$${producto.precio}`;
            h5.className = "search__bar__games__item__texts";

            const h52 = document.createElement("h5");
            h52.innerText = `Stock: ${producto.stock}`;
            h52.className = "search__bar__games__item__texts";

            textsDiv.append(h4, h5, h52);

            const imgButton = document.createElement("img");
            imgButton.id = "search__add__to__cart__button";
            imgButton.setAttribute("src", "media/white-add-to-cart.png");
            imgButton.addEventListener("click", () => {
                agregarAlCarrito(producto);
            })

            div.append(textsDiv, imgButton);           
            contenedorProductosBusqueda.append(div);
        }
    }
}
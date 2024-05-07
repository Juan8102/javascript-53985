/*
const categorias = [
    "Espacio", "Mundo abierto", "Terror", "Zombis", "Buena trama", "Rol", "Fantasía", "Futurista", "Suspenso", "Cooperativo", "Cartas",
    "Misterio", "Decisiones", "FPS", "Exploración", "Estrategia", "Supervivencia", "Cyberpunk", "Viejo oeste", "Plataformas"
]
*/

const productos = JSON.parse(localStorage.productos);
let arrayActual = productos;

//Renderización de productos
const contenedorProductos = document.getElementById("cards__container");

let inicioRenderizacion = 0;
let finRendericacion = 20;
function renderizarProductos(array) {
    contenedorProductos.innerHTML = "";

    array = array.slice(inicioRenderizacion, finRendericacion);

    for (const producto of array) {
        //Contenedor de toda la información del producto
        const div = document.createElement("div");
        div.className = "card";

        //Imágen y texto sustituto
        const imgDiv = document.createElement("div");
        imgDiv.id = "product__image__container";

        let image;
        if (producto.image !== "") { //Si el producto no tiene una imágen asignada, se sustituirá por un texto
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

        //Textos
        const textsDiv = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;

        const p = document.createElement("p");
        p.innerText = `Stock: ${producto.stock}`;

        //Botón
        const buttonDiv = document.createElement("div");
        buttonDiv.id = "card__overlay__container";

        const button = document.createElement("button");
        button.className = "card__button";

        const imgButton = document.createElement("img");
        imgButton.setAttribute("src", "media/add-to-cart.png");

        button.append(imgButton);
        button.addEventListener("click", () => {
            agregarAlCarrito(producto, 1);
        })

        //Texto mostrado al usuario
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

//Gestión de páginas
let numeroPaginas = 0;
const textoPaginas = document.getElementById("cards__footer__text");
const paginaAnterior = document.getElementById("cards__footer__previous-page__link");
const siguientePagina = document.getElementById("cards__footer__next-page__link");
paginaAnterior.addEventListener("click", () => gestionPaginas(1));
siguientePagina.addEventListener("click", () => gestionPaginas(2));

function gestionPaginas(action) {
    if (action === 1) { //Si se presionó el botón que lleva a la página anterior
        if (inicioRenderizacion !== 0) {
            numeroPaginas--; //Se disminuye el número de la página actual
            textoPaginas.innerText = `${numeroPaginas}`;
            
            //Se actualizan los límites de renderización
            inicioRenderizacion = inicioRenderizacion - 20;
            finRendericacion = finRendericacion - 20;

            verificarPagina(1);
        }
    }
    else { //Si se presionó el botón que lleva a la página siguiente
        if (finRendericacion < arrayActual.length) {
            //El proceso es idéntico al anterior salvo por la acción
            numeroPaginas++;
            textoPaginas.innerText = `${numeroPaginas}`;

            inicioRenderizacion = inicioRenderizacion + 20;
            finRendericacion = finRendericacion + 20;

            verificarPagina(1);
        }
    }
}

function verificarPagina(action) {
    if (action === 3) { //Si se aplica el filtro de precio se vuelve a la primera página
        //Se reestablecen los límites de renderización
        inicioRenderizacion = 0;
        finRendericacion = 20;
        
        numeroPaginas = 0; //Se reestablece el número de la página actual
        textoPaginas.innerText = numeroPaginas;
        renderizarProductos(arrayActual);
    }
    
    //Página anterior
    if (inicioRenderizacion === 0) { //Si los límites de renderización son iniciales no se podrá volver a la página anterior
        paginaAnterior.style.display = "none";
    }
    else { //En el caso de que los límites de renderización no sean iniciales se permitirá volver a la página anterior
        paginaAnterior.style.display = "block";
    }

    //Página siguiente
    if (finRendericacion > arrayActual.length) {
        siguientePagina.style.display = "none";
    }
    else {
        siguientePagina.style.display = "block";
    }

    if (action === 1) { //Si se presionó alguno de los dos botones que gestionan las páginas
        renderizarProductos(arrayActual);
    }
}
verificarPagina(2);

//Filtros
const textoRangoPrecio = document.getElementById("price__range__text");
const sliderRangoPrecio = document.getElementById("price__range");
sliderRangoPrecio.addEventListener("input", filtrarPorPrecio)

function filtrarPorPrecio() {
    const rangoPrecio = sliderRangoPrecio.value * 6;
    if (rangoPrecio !== 0) { //Si el filtro de precio es aplicado, se realizarán el filtrado correspondiente
        textoRangoPrecio.innerText = `Less than $${rangoPrecio}`;
        arrayActual = productos.filter((el) => el.precio <= rangoPrecio);
        verificarPagina(3);
    }
    else { //Si el filtro de precio no es aplicado, se mostrarán todos los productos
        textoRangoPrecio.innerText = "Any price";
        arrayActual = productos;
        verificarPagina(3);
    }
}

// Sistema de carrito
let carrito = [];
const indicadorCantidadJuegos = document.getElementById("cart__quantity__text");
const botonPago = document.getElementById("cart__payment__link");

function obtenerCarrito() {
    if (localStorage.carrito !== undefined) { //Si la llave "carrito" existe
        let carritoLS = JSON.parse(localStorage.carrito);
        carrito = carritoLS;
        indicadorCantidadJuegos.innerText = `${carrito.length}`;
    
        if (carrito.length > 0) { //Si hay al menos un producto en el carrito, se habilitará el acceso a la página de pago
            botonPago.setAttribute("href", "pages/payment.html")
        }
    }
}
obtenerCarrito();

//Contenedores
const contenedorCarrito = document.getElementById("cart__sidebar__container");
const contenedorItemsCarrito = document.getElementById("cart__sidebar__items__container");

//Elementos destinados a la estética de la página
const scrollCuerpo = document.getElementById("body");
const overlay = document.getElementById("cart__sidebar__overlay");

//Botones del carrito
const botonMostrarCarrito = document.getElementById("show__cart__button");
const botonCerrarCarrito = document.getElementById("close__cart__button");
const botonVaciarCarrito = document.getElementById("empty__cart__button");

// Eventos
botonVaciarCarrito.addEventListener("click", vaciarCarrito);
botonMostrarCarrito.addEventListener("click", () => verCarrito(1));
botonCerrarCarrito.addEventListener("click", () => verCarrito(2));
overlay.addEventListener("click", () => verCarrito(3));

//Esta es una función que únicamente maneja la estética del carrito
function verCarrito(action) {
    let claseContenedorCarrito;
    let claseScrollCuerpo;
    let claseOverlay;
    if (action === 1) { //Si se presionó el botón de mostrar el carrito
        claseContenedorCarrito = "shown";
        claseScrollCuerpo = "noscroll";
        claseOverlay = "overlay";
    }
    else { //Si se presionó el botón de cerrar el carrito o se hizo click fuera del carrito
        claseContenedorCarrito = "closed";   
        claseScrollCuerpo = "scroll";
        claseOverlay = "no-overlay";
    }
    contenedorCarrito.className = claseContenedorCarrito;
    scrollCuerpo.className = claseScrollCuerpo;
    overlay.className = claseOverlay;

    renderizarCarrito();
}

function renderizarCarrito() {
    contenedorItemsCarrito.innerHTML = "";
    for (const producto of carrito) {
        //Contenedor de toda la información del producto
        const div = document.createElement("div");
        div.className = "cart__item";

        //Imágen y texto sustituto
        const imgDiv = document.createElement("div");

        let image;
        if (producto.image !== "") { //Si el producto no tiene una imágen asignada, se sustituirá por un texto
            const img = document.createElement("img");
            img.setAttribute("src", `${producto.image}`);
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
        h3.innerText = producto.titulo;
        h3.className = "cart__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;
        h4.className = "cart__item__text";

        itemsDiv.append(h3, h4);

        //Botón
        const imgButton = document.createElement("img");
        imgButton.className = "cart__delete__item__button";
        imgButton.setAttribute("src", "media/trash_can.png");
        imgButton.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        })

        div.append(image, itemsDiv, imgButton);
        contenedorItemsCarrito.append(div);
    }
    renderizarProductos(productos);
}

function agregarAlCarrito(producto, action) {
    const todosLosOverlays = document.getElementsByClassName("show__card__overlay__text");
    for(const texto of todosLosOverlays) { //Se borran todos los textos temporales para dejar solo el último
        texto.className = "closed__card__overlay__text";
    }

    const cardOverlayText = document.getElementById(`card__overlay__text${productos.indexOf(producto)}`);
    const buscarProductoCarrito = carrito.find((el) => el.titulo.toLowerCase() === producto.titulo.toLowerCase());
    if (buscarProductoCarrito !== undefined) { //Si el producto que se quiere agregar al carrito, ya está en él
        if (action === 1) {
            cardOverlayText.innerText = "You already have this product in your cart.";
            cardOverlayText.className = "show__card__overlay__text";
        }
    }
    else { //Si el producto que se quiere agregar al carrito, NO está en él
        carrito.push(producto);

        const carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);

        indicadorCantidadJuegos.innerText = `${carrito.length}`;

        if (action === 1) {
            cardOverlayText.innerText = `Product added to your cart.`;
            cardOverlayText.className = "show__card__overlay__text";
        }

        botonPago.setAttribute("href", "pages/payment.html");
    }
}

function eliminarDelCarrito(producto) {
    const indexProducto = carrito.indexOf(producto);
    carrito.splice(indexProducto, 1);

    const carritoJSON = JSON.stringify(carrito);
    localStorage.carrito = carritoJSON;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
    
    if (carrito.length === 0) { //Si después de eliminar el producto del carrito, este queda vacío, se quitará el acceso a la página de pago
        botonPago.setAttribute("href", "#!");
    }
    
    renderizarCarrito();
}

function vaciarCarrito() {
    if (carrito.length > 0) {
        carrito.splice(0, carrito.length);

        const carritoJSON = JSON.stringify(carrito);
        localStorage.carrito = carritoJSON;
        indicadorCantidadJuegos.innerText = `${carrito.length}`;

        botonPago.setAttribute("href", "#!"); //Se quita el acceso a la página de pago
        renderizarCarrito();
    }
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
            //Contenedor de toda la información de los productos buscados
            const div = document.createElement("div");
            div.className = "search__bar__games__item";

            //Contenedor de los textos
            const textsDiv = document.createElement("div");

            const h4 = document.createElement("h4");
            h4.innerText = `${producto.titulo}`;

            const indexProducto = carrito.indexOf(producto);
            if (carrito[indexProducto] === producto) { //Si algunop de los productos buscados ya está en el carrito
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

            //Botón
            const imgButton = document.createElement("img");
            imgButton.id = "search__add__to__cart__button";
            imgButton.setAttribute("src", "media/white-add-to-cart.png");
            imgButton.addEventListener("click", () => {
                agregarAlCarrito(producto, 2);
            })

            div.append(textsDiv, imgButton);           
            contenedorProductosBusqueda.append(div);
        }
    }
}
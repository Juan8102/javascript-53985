const productos = [
    /*{titulo: "", precio: 0, stock: 0},*/
    {titulo: "Astroneer",              precio: 5.99,  stock: 20},
    {titulo: "Fallout 4",              precio: 11.99, stock: 17},
    {titulo: "Helldivers II",          precio: 39.99, stock: 31},
    {titulo: "Demonologist",           precio: 7.99,  stock: 35},
    {titulo: "Resident Evil 7",        precio: 19.99, stock: 22},
    {titulo: "Back 4 Blood",           precio: 29.99, stock: 14},
    {titulo: "Red Dead Redemption 2",  precio: 69.99, stock: 28},
    {titulo: "Baldur's Gate 3",        precio: 34.99, stock: 20},
    {titulo: "Far Cry 5",              precio: 47.99, stock: 23},
    {titulo: "Resident Evil 2",        precio: 29.99, stock: 32},
    {titulo: "The Mortuary Assistant", precio: 12.49, stock: 16},
    {titulo: "Fallout: New Vegas",     precio: 5.99,  stock: 12},
    {titulo: "Resident Evil Village",  precio: 29.99, stock: 46},
    {titulo: "Content Warning",        precio: 4.49,  stock: 35},
    {titulo: "Hogwarts Legacy",        precio: 29.99, stock: 11},
    {titulo: "Lethal Company",         precio: 5.79,  stock: 47},
    {titulo: "Cyberpunk 2077",         precio: 44.99, stock: 19},
    {titulo: "Fallout 76",             precio: 4.79,  stock: 24},
    {titulo: "Hunt: Showdown",         precio: 18.99, stock: 45},
    {titulo: "Resident Evil 4 (2005)", precio: 29.99, stock: 36},
    {titulo: "Buckshot Roulette",      precio: 1.49,  stock: 12},
    {titulo: "Sons Of The Forest",     precio: 14.99, stock: 18},
    {titulo: "Far Cry 6",              precio: 47.99, stock: 37},
    {titulo: "Detroit: Become Human",  precio: 31.99, stock: 44},
    {titulo: "Resident Evil 4",        precio: 29.99, stock: 26},
    {titulo: "DOOM Eternal",           precio: 23.99, stock: 11},
    {titulo: "Project Zomboid",        precio: 10.49, stock: 28},
    {titulo: "Metro Exodus",           precio: 22.99, stock: 33},
    {titulo: "Shadows of Doubt",       precio: 9.99,  stock: 31},
    {titulo: "It Takes Two",           precio: 39.99, stock: 18},
    {titulo: "Resident Evil 3",        precio: 29.99, stock: 21},
];

//Renderización de productos por filtros
const contenedorProductos = document.getElementById("cards__container");
const barraDeBusqueda = document.getElementById("search__bar");

function renderizarProductos(array) {
    for (const producto of array) {
        const div = document.createElement("div");
        div.className = "card";

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;

        const p = document.createElement("p");
        p.innerText = `Stock: ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "card__button";
        button.innerHTML = `<img src="media/add-to-cart.png" />`

        div.append(h3, h4, p, button);
        contenedorProductos.append(div);
    }
}

//Filtrado de productos
const textoIndicadorDeBusqueda = document.getElementById("search__indicator");
const rangoPrecio = document.getElementById("price__range");
const textoRangoPrecio = document.getElementById("price__range__text");

//Eventos
barraDeBusqueda.addEventListener("input", filtrarProductos);
rangoPrecio.addEventListener("input", filtrarProductos)

function filtrarProductos() {
    contenedorProductos.innerHTML = "";
    
    //Filtro de precio
    let valorRangoPrecio = rangoPrecio.value;
    if (valorRangoPrecio > 0) {
        valorRangoPrecio = valorRangoPrecio * 6;
        textoRangoPrecio.innerText = `Less than $${valorRangoPrecio}`;
    }
    else {
        textoRangoPrecio.innerText = "Any price";
    }

    const productosFiltradosPrecio = productos.filter((el) => el.precio <= valorRangoPrecio);

    //Busqueda directa
    const busquedaProducto = barraDeBusqueda.value;

    if (busquedaProducto !== "") {
        textoIndicadorDeBusqueda.innerText = `Searching "${busquedaProducto}"`
    }
    else {
        textoIndicadorDeBusqueda .innerText = "All games";
    }

    const productosFiltrados = productosFiltradosPrecio.filter((el) => el.titulo.toLowerCase().includes(busquedaProducto.toLowerCase()));
    renderizarProductos(productosFiltrados);    
}

renderizarProductos(productos);

// Carrito
const carrito = [];
const contenedorCarrito = document.getElementById("cart__sidebar__container");
const scrollCuerpo = document.getElementById("body");
const overlay = document.getElementById("cart__sidebar__overlay");

// Eventos
const botonMostrarCarrito = document.getElementById("show__cart__button");
const botonCerrarCarrito = document.getElementById("close__cart__button");
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
}

const arrayProductos = [
    {image: "media/products/astro.jpg",    titulo: "Astroneer",              precio: 5.99,  stock: 20},
    {image: "media/products/f4.png",       titulo: "Fallout 4",              precio: 11.99, stock: 17},
    {image: "media/products/hell2.png",    titulo: "Helldivers II",          precio: 39.99, stock: 31},
    {image: "media/products/demo.png",     titulo: "Demonologist",           precio: 7.99,  stock: 35},
    {image: "media/products/re7.png",      titulo: "Resident Evil 7",        precio: 19.99, stock: 22},
    {image: "media/products/b4b.png",      titulo: "Back 4 Blood",           precio: 29.99, stock: 14},
    {image: "media/products/rdr2.png",     titulo: "Red Dead Redemption 2",  precio: 69.99, stock: 28},
    {image: "media/products/bg3.png",      titulo: "Baldur's Gate 3",        precio: 34.99, stock: 20},
    {image: "media/products/fc5.png",      titulo: "Far Cry 5",              precio: 47.99, stock: 23},
    {image: "media/products/re2.png",      titulo: "Resident Evil 2",        precio: 29.99, stock: 32},
    {image: "media/products/tma.png",      titulo: "The Mortuary Assistant", precio: 12.49, stock: 16},
    {image: "media/products/fnv.png",      titulo: "Fallout: New Vegas",     precio: 5.99,  stock: 12},
    {image: "media/products/re8.png",      titulo: "Resident Evil Village",  precio: 29.99, stock: 46},
    {image: "media/products/cw.png",       titulo: "Content Warning",        precio: 4.49,  stock: 35},
    {image: "media/products/hl.png",       titulo: "Hogwarts Legacy",        precio: 29.99, stock: 11},
    {image: "media/products/lc.png",       titulo: "Lethal Company",         precio: 5.79,  stock: 47},
    {image: "media/products/c2077.png",    titulo: "Cyberpunk 2077",         precio: 44.99, stock: 19},
    {image: "media/products/f76.png",      titulo: "Fallout 76",             precio: 4.79,  stock: 24},
    {image: "media/products/hs.png",       titulo: "Hunt: Showdown",         precio: 18.99, stock: 45},
    {image: "media/products/re4-2005.png", titulo: "Resident Evil 4 (2005)", precio: 29.99, stock: 36},
    {image: "media/products/br.jpg",       titulo: "Buckshot Roulette",      precio: 1.49,  stock: 12},
    {image: "media/products/sotf.png",     titulo: "Sons Of The Forest",     precio: 14.99, stock: 18},
    {image: "media/products/fc6.png",      titulo: "Far Cry 6",              precio: 47.99, stock: 37},
    {image: "media/products/dbh.png",      titulo: "Detroit: Become Human",  precio: 31.99, stock: 44},
    {image: "media/products/re4.png",      titulo: "Resident Evil 4",        precio: 29.99, stock: 26},
    {image: "media/products/doom-e.png",   titulo: "DOOM Eternal",           precio: 23.99, stock: 11},
    {image: "media/products/pz.png",       titulo: "Project Zomboid",        precio: 10.49, stock: 28},
    {image: "media/products/metro-e.png",  titulo: "Metro Exodus",           precio: 22.99, stock: 33},
    {image: "media/products/sod.png",      titulo: "Shadows of Doubt",       precio: 9.99,  stock: 31},
    {image: "media/products/itt.jpg",      titulo: "It Takes Two",           precio: 39.99, stock: 18},
    {image: "media/products/re3.png",      titulo: "Resident Evil 3",        precio: 29.99, stock: 21},
    {image: "media/products/fc3.png",      titulo: "Far Cry 3",              precio: 17.99, stock: 27},
    {image: "media/products/bal.png",      titulo: "Balatro",                precio: 5.99,  stock: 29},
];

function productosLS() {
    if (localStorage.productos === undefined) {
        const productosJSON = JSON.stringify(arrayProductos);
        localStorage.setItem("productos", productosJSON);
    }
}
productosLS();
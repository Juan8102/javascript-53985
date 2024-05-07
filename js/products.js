let arrayProductos = [
    {image: "media/products/astro.jpg",    titulo: "Astroneer",              categoria1: "Espacio",          categoria2: "Mundo abierto",          precio: 5.99,  stock: 20},
    {image: "media/products/f4.png",       titulo: "Fallout 4",              categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 11.99, stock: 17},
    {image: "media/products/hell2.png",    titulo: "Helldivers II",          categoria1: "Futurista",        categoria2: "Acción",                 precio: 39.99, stock: 31},
    {image: "media/products/demo.png",     titulo: "Demonologist",           categoria1: "Terror",           categoria2: "Misterio",               precio: 7.99,  stock: 35},
    {image: "media/products/re7.png",      titulo: "Resident Evil 7",        categoria1: "Terror",           categoria2: "Acción",                 precio: 19.99, stock: 22},
    {image: "media/products/b4b.png",      titulo: "Back 4 Blood",           categoria1: "Zombis",           categoria2: "FPS",                    precio: 29.99, stock: 14},
    {image: "media/products/rdr2.png",     titulo: "Red Dead Redemption 2",  categoria1: "Buena trama",      categoria2: "Mundo abierto",          precio: 69.99, stock: 28},
    {image: "media/products/bg3.png",      titulo: "Baldur's Gate 3",        categoria1: "Rol",              categoria2: "Decisiones",             precio: 34.99, stock: 20},
    {image: "media/products/fc5.png",      titulo: "Far Cry 5",              categoria1: "Mundo abierto",    categoria2: "FPS",                    precio: 47.99, stock: 23},
    {image: "media/products/re2.png",      titulo: "Resident Evil 2",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 32},
    {image: "media/products/tma.png",      titulo: "The Mortuary Assistant", categoria1: "Terror",           categoria2: "Misterio",               precio: 12.49, stock: 16},
    {image: "media/products/fnv.png",      titulo: "Fallout: New Vegas",     categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 5.99,  stock: 12},
    {image: "media/products/re8.png",      titulo: "Resident Evil Village",  categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 46},
    {image: "media/products/cw.png",       titulo: "Content Warning",        categoria1: "Terror",           categoria2: "Exploración",            precio: 4.49,  stock: 35},
    {image: "media/products/hl.png",       titulo: "Hogwarts Legacy",        categoria1: "Fantasía",         categoria2: "Mundo abierto",          precio: 29.99, stock: 11},
    {image: "media/products/lc.png",       titulo: "Lethal Company",         categoria1: "Terror",           categoria2: "Exploración",            precio: 5.79,  stock: 47},
    {image: "media/products/c2077.png",    titulo: "Cyberpunk 2077",         categoria1: "Futurista",        categoria2: "Mundo abierto",          precio: 44.99, stock: 19},
    {image: "media/products/f76.png",      titulo: "Fallout 76",             categoria1: "Mundo abierto",    categoria2: "Supervivencia",          precio: 4.79,  stock: 24},
    {image: "media/products/hs.png",       titulo: "Hunt: Showdown",         categoria1: "Viejo oeste",      categoria2: "FPS",                    precio: 18.99, stock: 45},
    {image: "media/products/re4-2005.png", titulo: "Resident Evil 4 (2005)", categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 36},
    {image: "media/products/br.jpg",       titulo: "Buckshot Roulette",      categoria1: "Suspenso",         categoria2: "Estrategia",             precio: 1.49,  stock: 12},
    {image: "media/products/sotf.png",     titulo: "Sons Of The Forest",     categoria1: "Terror",           categoria2: "Supervivencia",          precio: 14.99, stock: 18},
    {image: "media/products/fc6.png",      titulo: "Far Cry 6",              categoria1: "Mundo abierto",    categoria2: "FPS",                    precio: 47.99, stock: 37},
    {image: "media/products/dbh.png",      titulo: "Detroit: Become Human",  categoria1: "Futurista",        categoria2: "Decisiones",             precio: 31.99, stock: 44},
    {image: "media/products/re4.png",      titulo: "Resident Evil 4",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 26},
    {image: "media/products/doom-e.png",   titulo: "DOOM Eternal",           categoria1: "FPS",              categoria2: "Acción",                 precio: 23.99, stock: 11},
    {image: "media/products/pz.png",       titulo: "Project Zomboid",        categoria1: "Zombis",           categoria2: "Mundo abierto",          precio: 10.49, stock: 28},
    {image: "media/products/metro-e.png",  titulo: "Metro Exodus",           categoria1: "Buena trama",      categoria2: "Acción",                 precio: 22.99, stock: 33},
    {image: "media/products/sod.png",      titulo: "Shadows of Doubt",       categoria1: "Buena trama",      categoria2: "Cyberpunk",              precio: 9.99,  stock: 31},
    {image: "media/products/itt.jpg",      titulo: "It Takes Two",           categoria1: "Cooperativo",      categoria2: "Buena trama",            precio: 39.99, stock: 18},
    {image: "media/products/re3.png",      titulo: "Resident Evil 3",        categoria1: "Terror",           categoria2: "Acción",                 precio: 29.99, stock: 21},
    {image: "media/products/fc3.png",      titulo: "Far Cry 3",              categoria1: "Mundo abierto",    categoria2: "Buena trama",            precio: 17.99, stock: 27},
    {image: "media/products/bal.png",      titulo: "Balatro",                categoria1: "Cartas",           categoria2: "Estrategia",             precio: 5.99,  stock: 29},
];

function productosLS() {
    if (localStorage.productos === undefined) {
        const productosJSON = JSON.stringify(arrayProductos);
        localStorage.setItem("productos", productosJSON);
    }
}
productosLS();
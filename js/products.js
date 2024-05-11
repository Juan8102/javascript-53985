const productsArray = [
    {image: "media/products/astro.jpg",    title: "Astroneer",              price: 5.99,  stock: 20},
    {image: "media/products/f4.png",       title: "Fallout 4",              price: 11.99, stock: 17},
    {image: "media/products/hell2.png",    title: "Helldivers II",          price: 39.99, stock: 31},
    {image: "media/products/demo.png",     title: "Demonologist",           price: 7.99,  stock: 35},
    {image: "media/products/re7.png",      title: "Resident Evil 7",        price: 19.99, stock: 22},
    {image: "media/products/b4b.png",      title: "Back 4 Blood",           price: 29.99, stock: 14},
    {image: "media/products/rdr2.png",     title: "Red Dead Redemption 2",  price: 69.99, stock: 28},
    {image: "media/products/bg3.png",      title: "Baldur's Gate 3",        price: 34.99, stock: 20},
    {image: "media/products/fc5.png",      title: "Far Cry 5",              price: 47.99, stock: 23},
    {image: "media/products/re2.png",      title: "Resident Evil 2",        price: 29.99, stock: 32},
    {image: "media/products/tma.png",      title: "The Mortuary Assistant", price: 12.49, stock: 16},
    {image: "media/products/fnv.png",      title: "Fallout: New Vegas",     price: 5.99,  stock: 12},
    {image: "media/products/re8.png",      title: "Resident Evil Village",  price: 29.99, stock: 46},
    {image: "media/products/cw.png",       title: "Content Warning",        price: 4.49,  stock: 35},
    {image: "media/products/hl.png",       title: "Hogwarts Legacy",        price: 29.99, stock: 11},
    {image: "media/products/lc.png",       title: "Lethal Company",         price: 5.79,  stock: 47},
    {image: "media/products/c2077.png",    title: "Cyberpunk 2077",         price: 44.99, stock: 19},
    {image: "media/products/f76.png",      title: "Fallout 76",             price: 4.79,  stock: 24},
    {image: "media/products/hs.png",       title: "Hunt: Showdown",         price: 18.99, stock: 45},
    {image: "media/products/re4-2005.png", title: "Resident Evil 4 (2005)", price: 29.99, stock: 36},
    {image: "media/products/br.jpg",       title: "Buckshot Roulette",      price: 1.49,  stock: 12},
    {image: "media/products/sotf.png",     title: "Sons Of The Forest",     price: 14.99, stock: 18},
    {image: "media/products/fc6.png",      title: "Far Cry 6",              price: 47.99, stock: 37},
    {image: "media/products/dbh.png",      title: "Detroit: Become Human",  price: 31.99, stock: 44},
    {image: "media/products/re4.png",      title: "Resident Evil 4",        price: 29.99, stock: 26},
    {image: "media/products/doom-e.png",   title: "DOOM Eternal",           price: 23.99, stock: 11},
    {image: "media/products/pz.png",       title: "Project Zomboid",        price: 10.49, stock: 28},
    {image: "media/products/metro-e.png",  title: "Metro Exodus",           price: 22.99, stock: 33},
    {image: "media/products/sod.png",      title: "Shadows of Doubt",       price: 9.99,  stock: 31},
    {image: "media/products/itt.jpg",      title: "It Takes Two",           price: 39.99, stock: 18},
    {image: "media/products/re3.png",      title: "Resident Evil 3",        price: 29.99, stock: 21},
    {image: "media/products/fc3.png",      title: "Far Cry 3",              price: 17.99, stock: 27},
    {image: "media/products/bal.png",      title: "Balatro",                price: 5.99,  stock: 29},
];

function localStorageProducts() {
    if (localStorage.products === undefined) {
        const productsToJSON = JSON.stringify(productsArray);
        localStorage.setItem("products", productsToJSON);
    }
}
localStorageProducts();
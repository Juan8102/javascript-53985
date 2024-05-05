let carrito = [];
if (localStorage.carrito !== undefined) {
    let carritoLS = JSON.parse(localStorage.carrito);
    carrito = carritoLS;
}

const contenedorItemsPago = document.getElementById("payment__products__container");
const textoTotalAPagar = document.getElementById("total__price__text");

function calculoTotalAPagar() {
    const totalAPagar = carrito.reduce((acc, el) => acc + el.precio, 0);
    let totalPor100 = totalAPagar * 100;           //Se multiplica el total a pagar por 100 para desplazar los decimales
    let totalRedondeado = Math.round(totalPor100); //Se redondea el número multiplicado
    let total = totalRedondeado / 100;             //Se divide entre 100 para volver a la escala original
    textoTotalAPagar.innerText = `Total price: $${total}`;
    renderizarProductos();
}

function renderizarProductos(total) {
    for (const producto of carrito) {
        const div = document.createElement("div");
        div.className = "payment__item";

        const imgDiv = document.createElement("div");

        let image;
        if (producto.image !== "") {
            imgDiv.className = "payment__img__container";
            const img = document.createElement("img");
            img.setAttribute("src", `../${producto.image}`);

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
        h3.innerText = producto.titulo;
        h3.className = "payment__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;
        h4.className = "payment__item__text";

        itemsDiv.append(h3, h4);

        div.append(image, itemsDiv);
        contenedorItemsPago.append(div);
    }
}
calculoTotalAPagar()
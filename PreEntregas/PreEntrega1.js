/* let comprando = true;
let juegos = "";
let total = 0;

while (comprando) {
    let nombre = prompt("¡Bienvenido al menu de publicación de juegos!\nIngresa el nombre de tu juego:\n\nSi no quieres publicar nada simplemente envia este formulario vacío.");
    
    //SI EL USUARIO NO INGRESA NADA EL MENU SE CIERRA
    if (nombre != "") {
        let precio = parseFloat(prompt("Ahora ingresa el precio en USD, máximo $120 (si el precio de tu juego contiene decimales separalos con un punto)."));
        if (precio >= 0 && precio <= 120) {

            //SI LA LISTA ESTA VACÍA NO SE LE AGREGA UN SALTO DE LÍNEA (POR ESTÉTICA)
            if (juegos == "") {
                if (precio <= 0) {
                    juegos += "[Gratis]" + " - " + nombre;
                }
                else {
                    juegos += "[$" + precio + "] - " + nombre;
                }
            }

            //EN EL CASO CONTRARIO SE LE AGREGA UN SALTO DE PARA QUE QUEDE DEBAJO DEL PRODUCTO ANTERIOR
            else {
                if (precio <= 0) {
                    juegos += "\n" + "[Gratis]" + " - " + nombre;
                }
                else {
                    juegos += "\n" + "[$" + precio + "] - " + nombre;
                }
            }

            let seguir = prompt("Ingresa 1 para publicar otro juego.\nIngresa 2 para ver tus juegos publicados y continuar publicando.\nNo ingreses nada para cerrar el menu.");
            if (seguir == "") {
                comprando = false;
                alert("Estos son tus juegos publicados:\n" + juegos);
            }
            else if (seguir == 2) {
                alert("Estos son tus juegos publicados:\n" + juegos);
            }
            else if (seguir < 1 || seguir > 2) {
                alert("El número ingresado no corresponde a ninguna de las dos opciones.\nSe cerrará el menú.")
                comprando = false;
            }
        }
        else {
            alert("Has ingresado un precio invalido.\nTe recordamos que el límite de precio es de $120 USD");
            comprando = false;
        }
    }
    else {
        comprando = false;
    }
} */
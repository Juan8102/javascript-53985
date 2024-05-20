let chosenProduct = localStorage.getItem("chosenProduct");

getCart();

function productDetails() {
    const JSONProduct = localStorage.getItem("chosenProduct");

    //Contenedor del producto
    const productContainer = document.getElementById("product__info__container");
    if (JSONProduct !== "") {
        const product = JSON.parse(JSONProduct);
        document.title = `${product.title}'s details`;

        //Info lateral
        const sideInfoContainer = document.createElement("div");
        sideInfoContainer.id = "side__info";
        
        //Imágen del producto
        const image = document.createElement("img");
        image.id = "product__image";
        image.setAttribute("src", `../${product.image}`);

        //Compañía y géneros
        const companyAndGenreContainer = document.createElement("div");
        companyAndGenreContainer.className = "side__info__item__container";
        
        //Compañía
        const companyText = document.createElement("h3");
        const companyTextSpan = document.createElement("span")
        companyTextSpan.innerText = `${product.company}`;

        companyText.append(companyTextSpan);

        //Géneros
        const genreText = document.createElement("h4");
        genreText.id = "product__genres";

        genreText.innerText = product.genre.join(", ") + ".";

        companyAndGenreContainer.append(companyText, genreText);

        //Fecha de salida
        const releaseDateContainer = document.createElement("div");
        releaseDateContainer.className = "side__info__item__container";
        
        const releaseDateText = document.createElement("h4");
        const releaseDateTextSpan = document.createElement("span");
        releaseDateTextSpan.innerText = "Release date:";
        
        releaseDateText.append(releaseDateTextSpan);

        const releaseDate = document.createElement("h4");
        releaseDate.innerText = `${product.release_date}`;

        releaseDateContainer.append(releaseDateText, releaseDate);

        //Puntuación de los usuarios
        const usersScoreContainer = document.createElement("div");
        usersScoreContainer.className = "side__info__item__container";

        const usersScoreText = document.createElement("h4");
        const usersScoreTextSpan = document.createElement("span");
        usersScoreTextSpan.innerText = `Users score: `;

        usersScoreText.append(usersScoreTextSpan);
        usersScoreText.innerHTML += `${product.ratings.users_score}`;

        usersScoreContainer.append(usersScoreText);

        //Tamaño del archivo
        const fileSizeContainer = document.createElement("div");
        fileSizeContainer.className = "side__info__item__container";

        const fileSizeText = document.createElement("h4");
        const fileSizeTextSpan = document.createElement("span");
        fileSizeTextSpan.innerText = `File size: `;

        fileSizeText.append(fileSizeTextSpan);
        fileSizeText.innerHTML += `${product.file_size}`;

        fileSizeContainer.append(fileSizeText);

        //Botón de añadir al carrito
        const priceAndButtonContainer = document.createElement("div");
        priceAndButtonContainer.className = "side__info__item__container";

        const productPriceText = document.createElement("h3");
        productPriceText.id = "product__price";
        productPriceText.innerText = `$${product.price}`;

        const button = document.createElement("button");
        button.id = "product__add__to__cart__button";
        button.innerHTML = "Add to cart";

        button.addEventListener("click", () => {
            addToCart(product);
        })

        priceAndButtonContainer.append(productPriceText, button);

        sideInfoContainer.append(image, companyAndGenreContainer, releaseDateContainer, usersScoreContainer, fileSizeContainer, priceAndButtonContainer);
        
        //Información principal del producto
        const mainInfoContainer = document.createElement("div");
        mainInfoContainer.id = "main__info";

        //Descripción y título
        const descriptionContainer = document.createElement("div");
        descriptionContainer.className = "main__info__item__container";
        descriptionContainer.id = "product__description";

        //Título
        const productTitle = document.createElement("h2");
        productTitle.id = "product__title";

        const productTitleSpan = document.createElement("span");
        productTitleSpan.innerText = `${product.title}`;

        productTitle.append(productTitleSpan);

        //Descripción
        const descriptionTitle = document.createElement("h3");
        const descriptionTitleSpan = document.createElement("span");
        descriptionTitleSpan.innerText = "Description";

        descriptionTitle.append(descriptionTitleSpan);

        const description = document.createElement("p")
        description.innerText = `${product.description}`;

        descriptionContainer.append(productTitle, descriptionTitle, description);

        //Modos de juego
        const modesContainer = document.createElement("div");
        modesContainer.className = "main__info__item__container";
        modesContainer.id = "product__modes";

        const modesTitle = document.createElement("h4");
        const modesTitleSpan = document.createElement("span");
        modesTitleSpan.innerText = "Modes:";

        modesTitle.append(modesTitleSpan);

        const modesText = document.createElement("h4");
        modesText.innerText = product.modes.join(", ") + ".";

        modesContainer.append(modesTitle, modesText);

        //Idiomas disponibles
        const languagesContainer = document.createElement("div");
        languagesContainer.className = "main__info__item__container";
        languagesContainer.id = "product__languages";

        const languagesTitle = document.createElement("h4");
        const languagesTitleSpan = document.createElement("span");
        languagesTitleSpan.innerText = "Languages:";

        languagesTitle.append(languagesTitleSpan);

        const languagesText = document.createElement("h4");
        languagesText.innerText = product.languages.join(", ") + ".";

        languagesContainer.append(languagesTitle, languagesText);

        //Requisitos mínimos del sistema
        const MSRContainer = document.createElement("div");
        MSRContainer.className = "main__info__item__container";
        MSRContainer.id = "product__system__minimum__requirements";

        //Título de los requisitos
        const systemRequirementsTitle = document.createElement("h2");
        const systemRequirementsTitleSpan = document.createElement("span");
        systemRequirementsTitleSpan.innerText = "System requirements";

        systemRequirementsTitle.append(systemRequirementsTitleSpan);

        const MSRTitle = document.createElement("h3");
        MSRTitle.id = "system__requirements__minimum";

        const MSRTitleSpan = document.createElement("span");
        MSRTitleSpan.innerText = "Minimum:"
        MSRTitle.append(MSRTitleSpan);

        const MSRList = document.createElement("ul");

        //Requisitos
        const MSROs = document.createElement("li");
        MSROs.innerText = `OS: ${product.system_requirements.minimum.OS}`;

        const MSRMemory = document.createElement("li");
        MSRMemory.innerText = `Memory: ${product.system_requirements.minimum.Memory}`;

        const MSRProcessor = document.createElement("li");
        MSRProcessor.innerText = `Processor: ${product.system_requirements.minimum.Processor}`;

        const MSRGraphics = document.createElement("li");
        MSRGraphics.innerText = `Graphics: ${product.system_requirements.minimum.Graphics}`;

        const MSRStorage = document.createElement("li");
        MSRStorage.innerText = `Storage: ${product.system_requirements.minimum.Storage}`;

        MSRList.append(MSROs, MSRProcessor, MSRMemory, MSRGraphics, MSRStorage);
        MSRContainer.append(systemRequirementsTitle, MSRTitle, MSRList);

        //Requisitos recomendados del sistema
        const RSRContainer = document.createElement("div");
        RSRContainer.className = "main__info__item__container";
        RSRContainer.id = "product__system__minimum__requirements";

        const RSRTitle = document.createElement("h3");
        RSRTitle.id = "system__requirements__recommended";

        const RSRTitleSpan = document.createElement("span");
        RSRTitleSpan.innerText = "Recommended:";
        RSRTitle.append(RSRTitleSpan);

        const RSRList = document.createElement("ul");

        //Requisitos
        const RSROs = document.createElement("li");
        RSROs.innerText = `OS: ${product.system_requirements.recommended.OS}`;

        const RSRMemory = document.createElement("li");
        RSRMemory.innerText = `Memory: ${product.system_requirements.recommended.Memory}`;

        const RSRProcessor = document.createElement("li");
        RSRProcessor.innerText = `Processor: ${product.system_requirements.recommended.Processor}`;

        const RSRGraphics = document.createElement("li");
        RSRGraphics.innerText = `Graphics: ${product.system_requirements.recommended.Graphics}`;

        const RSRStorage = document.createElement("li");
        RSRStorage.innerText = `Storage: ${product.system_requirements.recommended.Storage}`;

        RSRList.append(RSROs, RSRProcessor, RSRMemory, RSRGraphics, RSRStorage);
        RSRContainer.append(RSRTitle, RSRList);

        mainInfoContainer.append(descriptionContainer, modesContainer, languagesContainer, MSRContainer, RSRContainer);
        productContainer.append(sideInfoContainer, mainInfoContainer);
    }
    else {
        productContainer.id = "error__info__container";
        document.title = "404 · Product not found";
        
        const errorText = document.createElement("h1");
        errorText.innerText = "404";

        const errorDescription = document.createElement("h2");
        errorDescription.innerText = "Product not found.";

        const buttonLink = document.createElement("a");
        buttonLink.setAttribute("href", "../index.html")

        const button = document.createElement("button");
        button.id = "error__button";
        button.innerHTML = "Go back";

        buttonLink.append(button);

        productContainer.append(errorText, errorDescription, buttonLink)
    }
}
productDetails();
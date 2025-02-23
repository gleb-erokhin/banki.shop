const
    a = JSON.parse(cardsData),
    d = document.querySelector(".cards"),
    modalWindow = document.getElementById("modalWindow"),
    modalImg = modalWindow.querySelector("[data-target='img']"),
    modalHeader = modalWindow.querySelector("[data-target='header']"),
    modalDesc = modalWindow.querySelector("[data-target='about']"),
    modalOldPrice = modalWindow.querySelector("[data-oldPrice='oldPrice']"),
    modalPrice = modalWindow.querySelector("[data-price='price']");


// Заполнение карточек на странице
a.forEach(item => {
    d.insertAdjacentHTML("beforeend", `
        <div class="card" data-id="${item.id}">
            <div class="card__column" data-fancybox data-src="#modalWindow">
        
                <a class="card__link" href="#">
                    <img src="${item.img}" width="280" height="160" alt="«Рождение Венеры» Сандро Боттичелли"
                        srcset="${item.bigImg + item.prefix}" data-img="img">
                </a>

                <div class="card__desc">
                    <div class="card__header">
                        <h2 class="title title--fz18-reg" data-header="header">${item.header}</h2>
                    </div>
                    <div class="card__cart df">

                        <div class="card__buy df">
                            <span class="title title--price" data-oldPrice="oldPrice">${item.oldPrice}</span>
                            <span class="title title--fz16-bold" data-price="price">${item.price}</span>
                        </div>

                        <button class="btn" type="button">
                            ${item.button}
                        </button>
                    </div>

                    <p class="card__sale title title--fz16-bold">Продана на аукционе</p>
                </div>
            </div>
        </div>`
    );
});

// Обработчик клика по карточке для открытия модального окна с нужными данными
d.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
        const cardId = card.getAttribute("data-id");
        console.log(cardId);
        const cardData = a.find(item => item.id == cardId);

        // Заполнение модального окна
        modalImg.src = cardData.img;
        modalHeader.textContent = cardData.header;
        modalImg.srcset = cardData.bigImg + cardData.prefix;
        modalDesc.innerHTML = cardData.about;
        modalOldPrice.innerHTML = cardData.oldPrice;
        modalPrice.innerHTML = cardData.price;
    }
});

// Для создания проданного товара, поиск по дата атрибуту напрямую.
const data = document.querySelector('[data-id="4"]');
data.classList.add('sale');

// Инициализация Fancybox для открытия модального окна
Fancybox.bind("[data-fancybox]", {});

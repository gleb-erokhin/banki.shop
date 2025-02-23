const
    a = JSON.parse(cardsData),
    d = document.querySelector(".cards"),
    modalWindow = document.getElementById("modalWindow"),
    modalImg = modalWindow.querySelector("[data-target='img']");


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
        // modalImg.srcset = cardData.bigImg + cardData.prefix;
        // modalHeader.textContent = cardData.header;
        // modalText.textContent = cardData.info;
        // modalDesc.innerHTML = cardData.about;
        // modalSkils.innerHTML = cardData.skils;
        // modalGitSource.setAttribute('href', cardData.gitSource);
        // modalGitDemo.setAttribute('href', cardData.gitDemo);
    }
});

const data = document.querySelector('[data-id="4"]');
data.classList.add('sale')

// Инициализация Fancybox для открытия модального окна
Fancybox.bind("[data-fancybox]", {});

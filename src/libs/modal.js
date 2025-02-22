// Инициализация Fancybox для открытия модального окна
Fancybox.bind("[data-fancybox]", {});

d = document.querySelector(".cards")

modalWindow = document.getElementById("modalWindow"),
// modalImg = modalWindow.querySelector("[data-target='img']"),
modalHeader = modalWindow.querySelector("[data-target='header']"),
// // modalText = modalWindow.querySelector("[data-target='info']"),
modalDesc = modalWindow.querySelector("[data-target='about']"),
// modalGitSource = modalWindow.querySelector("[data-git='gitSource']"),
// modalGitDemo = modalWindow.querySelector("[data-git='gitDemo']"),
// modalPages = modalWindow.querySelector(".modal--list"),
// modalSkils = modalWindow.querySelector("[data-target='skils']");

// Обработчик клика по карточке для открытия модального окна с нужными данными
d.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
        const cardId = card.getAttribute("data-id");
        const cardData = a.find(item => item.id == cardId);

        // Заполнение модального окна
        modalImg.src = cardData.img;
        modalImg.srcset = cardData.bigImg + cardData.prefix;
        modalHeader.textContent = cardData.header;
        // modalText.textContent = cardData.info;
        modalDesc.innerHTML = cardData.about;
        modalSkils.innerHTML = cardData.skils;
        modalGitSource.setAttribute('href', cardData.gitSource);
        modalGitDemo.setAttribute('href', cardData.gitDemo);
    }
});
"use strict";

var a = JSON.parse(cardsData),
  d = document.querySelector(".cards"),
  modalWindow = document.getElementById("modalWindow"),
  // modalImg = modalWindow.querySelector("[data-target='img']"),
  modalHeader = modalWindow.querySelector("[data-target='header']"),
  modalDesc = modalWindow.querySelector("[data-target='about']"),
  modalOldPrice = modalWindow.querySelector("[data-oldPrice='oldPrice']"),
  modalPrice = modalWindow.querySelector("[data-price='price']"),
  modalSlide1 = modalWindow.querySelector("[data-target='slide1']"),
  modalSlide2 = modalWindow.querySelector("[data-target='slide2']");

// Заполнение карточек на странице
a.forEach(function (item) {
  d.insertAdjacentHTML("beforeend", "\n        <div class=\"card\" data-id=\"".concat(item.id, "\">\n            <div class=\"card__column\" data-fancybox data-src=\"#modalWindow\">\n        \n                <a class=\"card__link\" href=\"#\">\n                    <img src=\"").concat(item.img, "\" width=\"280\" height=\"160\" alt=\"\xAB\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0412\u0435\u043D\u0435\u0440\u044B\xBB \u0421\u0430\u043D\u0434\u0440\u043E \u0411\u043E\u0442\u0442\u0438\u0447\u0435\u043B\u043B\u0438\"\n                        srcset=\"").concat(item.bigImg + item.prefix, "\" data-img=\"img\">\n                </a>\n\n                <div class=\"card__desc\">\n                    <div class=\"card__header\">\n                        <h2 class=\"title title--fz18-reg\" data-header=\"header\">").concat(item.header, "</h2>\n                    </div>\n                    <div class=\"card__cart df\">\n\n                        <div class=\"card__buy df\">\n                            <span class=\"title title--price\" data-oldPrice=\"oldPrice\">").concat(item.oldPrice, "</span>\n                            <span class=\"title title--fz16-bold\" data-price=\"price\">").concat(item.price, "</span>\n                        </div>\n\n                        <button class=\"btn\" type=\"button\">\n                            ").concat(item.button, "\n                        </button>\n                    </div>\n\n                    <p class=\"card__sale title title--fz16-bold\">\u041F\u0440\u043E\u0434\u0430\u043D\u0430 \u043D\u0430 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0435</p>\n                </div>\n            </div>\n        </div>"));
});

// Обработчик клика по карточке для открытия модального окна с нужными данными
d.addEventListener("click", function (e) {
  var card = e.target.closest(".card");
  if (card) {
    var cardId = card.getAttribute("data-id");
    console.log(cardId);
    var cardData = a.find(function (item) {
      return item.id == cardId;
    });

    // Заполнение модального окна
    // modalImg.src = cardData.img;
    modalSlide1.src = cardData.slide1;
    modalSlide2.src = cardData.slide2;
    modalHeader.textContent = cardData.header;
    // modalImg.srcset = cardData.bigImg + cardData.prefix;
    modalDesc.innerHTML = cardData.about;
    modalOldPrice.innerHTML = cardData.oldPrice;
    modalPrice.innerHTML = cardData.price;
  }
});

// Для создания проданного товара, поиск по дата атрибуту напрямую.
var data = document.querySelector('[data-id="4"]');
data.classList.add('sale');

// Инициализация Fancybox для открытия модального окна
Fancybox.bind("[data-fancybox]", {});
var swiper = new Swiper(".modal__mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
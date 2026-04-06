import { resetValidation } from "./validate.js";

const editStorePopupButton = document.querySelector(".header__edit-btn");
const addProductPopupButton = document.querySelector(".section__add-btn");
const storeName = document.querySelector(".header__title")
const editStoreForm = document.querySelector("#edit-store-form")
const storeNameInput = editStoreForm.querySelector(
  ".popup__input_type_name",
);
const addProductForm = document.querySelector("#add-product-form");
const productNameInput = addProductForm.querySelector(
  ".popup__input_type_product_name",
);
const productURLInput = addProductForm.querySelector(".popup__input_type_url");
const productPriceInput = addProductForm.querySelector(
  ".popup__input_type_price",
);
const highlightPopupImage = document.querySelector(".popup__image");
const highlightPopupCaption = document.querySelector(".popup__caption");
const editStorePopup = document.querySelector("#edit-popup");
const addProductPopup = document.querySelector("#add-product-popup");
const highlightPopup = document.querySelector("#product-highlight-popup");
const productTemplate = document.querySelector("#product-template").content;

const initialProducts = [
  {
    name: "Poster 1",
    imageUrl: "./images/poster1.png",
    price: "29,99",
  },
  {
    name: "Poster 2",
    imageUrl: "./images/poster2.png",
    price: "39,99",
  },
  {
    name: "Poster 3",
    imageUrl: "./images/poster3.png",
    price: "19,99",
  },
  {
    name: "Poster 4",
    imageUrl: "./images/poster4.png",
    price: "79,99",
  },
];

function renderProduct(product) {
  const productElement = productTemplate
    .querySelector(".product")
    .cloneNode(true);
  const productTitle = productElement.querySelector(".product__title");
  const productImage = productElement.querySelector(".product__image");
  const productPrice = productElement.querySelector(".product__price");

  productTitle.textContent = product.name;

  productImage.src = product.imageUrl;
  productImage.alt = product.name;

  productPrice.textContent = `R$ ${product.price}`;

  const removeProductButton = productElement.querySelector(
    ".product__remove-btn",
  );

  removeProductButton.addEventListener("click", () => {
    productElement.remove();
  });

  productImage.addEventListener("click", () => {
    openHighlightPopup(product);
  });

  document.querySelector(".products").prepend(productElement);
}

initialProducts.forEach((product) => renderProduct(product));

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscClick);
  const formToReset = popup.querySelector(".popup__form")
  resetValidation(formToReset)
}

function openHighlightPopup(product) {
  highlightPopupImage.src = product.imageUrl;
  highlightPopupImage.alt = product.name;
  highlightPopupCaption.textContent = product.name;

  openPopup(highlightPopup);
}

function handleEscClick(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened");
    closePopup(popupOpened);
  }
}

function handleClosePopup(event) {
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closePopup(event.currentTarget);
  }
}

function handleCreateProduct(event) {
  event.preventDefault();

  const productData = {
    name: productNameInput.value,
    imageUrl: productURLInput.value,
    price: productPriceInput.value,
  };

  renderProduct(productData);

  closePopup(addProductPopup);
  addProductForm.reset();
}

function handleEditStore(event) {
  event.preventDefault();

  storeName.textContent = storeNameInput.value

  closePopup(editStorePopup);
  editStoreForm.reset();
}

editStorePopupButton.addEventListener("click", () => {
  openPopup(editStorePopup);
});

addProductPopupButton.addEventListener("click", () => {
  openPopup(addProductPopup);
});

addProductPopup.addEventListener("click", handleClosePopup);
editStorePopup.addEventListener("click", handleClosePopup);
highlightPopup.addEventListener("click", handleClosePopup);
addProductForm.addEventListener("submit", handleCreateProduct);
editStoreForm.addEventListener("submit", handleEditStore);

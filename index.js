import { FormValidator } from "./components/FormValidator.js";
import { Product } from "./components/Product.js";

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

initialProducts.forEach((product) => {
  const productInstance = new Product(product, "#product-template")
  const newProduct = productInstance.generateProduct()
  document.querySelector(".products").prepend(newProduct);
});

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscClick);

  if (popup.id === "edit-popup") {
    editStoreFormValidatior.resetValidation();
  }

  if (popup.id === "add-product-popup") {
    addProductFormValidatior.resetValidation();
  }
}

// function openHighlightPopup(product) {
//   highlightPopupImage.src = product.imageUrl;
//   highlightPopupImage.alt = product.name;
//   highlightPopupCaption.textContent = product.name;

//   openPopup(highlightPopup);
// }

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

  // renderProduct(productData);
  const productInstance = new Product(productData, "#product-template")
  const newProduct = productInstance.generateProduct()
  document.querySelector(".products").prepend(newProduct);

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


const editStoreFormValidatior = new FormValidator(
  {
    formSelector: "#add-product-form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  },
  editStoreForm,
);

const addProductFormValidatior = new FormValidator(
  {
    formSelector: "#edit-store-form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  },
  addProductForm,
);

editStoreFormValidatior.enableValidation();
addProductFormValidatior.enableValidation();
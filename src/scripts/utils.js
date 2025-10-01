import { Product } from "../components/Product.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";


const productURLInput = document.querySelector(".popup__input_type_url");
const productPriceInput = document.querySelector(".popup__input_type_price");
const productsContainer = document.querySelector(".products");
export const editPopup = document.querySelector("#edit-popup");
export const addProductForm = document.querySelector("#add-product-form");

export const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled', // não tenho essa classe no css ainda
  inputErrorClass: 'popup__input_type_error', // não tenho essa classe no css ainda
  errorClass: 'popup__error_visible' // não tenho essa classe no css ainda
}

export const initialProducts = [
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

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

export function renderProducts(products) {
  // apagar todos os produtos anterioes - div
  while (productsContainer.lastElementChild) {
    productsContainer.removeChild(productsContainer.lastElementChild)
  }

  products.forEach((product) => {
    renderProduct(product)
  })
}

export function renderProduct(product) {
  const productInstance = new Product({ name: product.name, imageUrl: product.imageUrl, price: product.price })
  const newProduct = productInstance.generateProduct()
  productsContainer.prepend(newProduct);
}
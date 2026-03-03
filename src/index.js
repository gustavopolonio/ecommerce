import { FormValidator } from "./components/FormValidator.js"
import { PopupWithForm } from "./components/PopupWithForm.js"
import { Product } from "./components/Product.js"
import { Section } from "./components/Section.js"

// Abrir o popup de editar nome da loja
const editStoreButton = document.querySelector(".header__edit-btn")
const addProductButton = document.querySelector(".section__add-btn")
const createProductForm = document.querySelector("#add-product-form")
const editStoreForm = document.querySelector('#edit-store-form')
const storeName = document.querySelector('.header__title')

const initialProducts = [
  {
    title: "Poster 1",
    imageUrl: "images/poster1.png",
    price: 29.99
  },
  {
    title: "Poster 2",
    imageUrl: "images/poster2.png",
    price: 49.99
  },
    {
    title: "Poster 3",
    imageUrl: "images/poster3.png",
    price: 99.99
  },
    {
    title: "Poster 4",
    imageUrl: "images/poster4.png",
    price: 109.99
  }
]

const productsListInstance = new Section(
  {
    initialItems: initialProducts,
    renderer: (data) => {
      const newProductInstance = new Product(
        data,
        '#product-template'
      )
      const newProduct = newProductInstance.generateProduct()
      productsListInstance.prependItem(newProduct)
    }
  },
  ".products"
)

productsListInstance.renderInitialItems()

// new Section

const createProductPopupInstance = new PopupWithForm(
  '#add-product-popup',
  (formValues) => {
    const newProductInstance = new Product(
      {
        title: formValues["product-name"],
        imageUrl: formValues["product-url"],
        price: formValues["product-price"]
      },
      '#product-template'
    )
    const newProduct = newProductInstance.generateProduct()
    productsListInstance.prependItem(newProduct)
  },
  () => createNewProductValidator.resetValidation()
)

addProductButton.addEventListener("click", () => {
  // addProductPopup.classList.add("popup_is-opened")
  // openPopup(addProductPopup)
  createProductPopupInstance.open()
})

createProductPopupInstance.setEventListeners()


const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const createNewProductValidator = new FormValidator(formValidationConfig, createProductForm)
const editStoreValidator = new FormValidator(formValidationConfig, editStoreForm)

createNewProductValidator.enableValidation()
editStoreValidator.enableValidation()

const editStorePopupInstance = new PopupWithForm(
  '#edit-popup',
  (formValues) => {
    storeName.textContent = formValues.name
  },
  () => editStoreValidator.resetValidation()
)

editStoreButton.addEventListener("click", () => {
  editStorePopupInstance.open()
})

editStorePopupInstance.setEventListeners()
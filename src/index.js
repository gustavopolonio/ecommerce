
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { Product } from "./components/Product.js";
import { Section } from "./components/Section.js";
const editStoreForm = document.querySelector("#edit-store-form");
const storeNameInput = document.querySelector(".popup__input_type_name");
const productNameInput = document.querySelector(
  ".popup__input_type_product_name"
);
const storeName = document.querySelector(".header__title");

import { addProductForm, formValidationConfig, initialProducts, renderProduct, renderProducts } from "./scripts/utils.js";

const editPopupButton = document.querySelector(".header__edit-btn");
const addProductButton = document.querySelector(".section__add-btn");
const searchBox = document.querySelector(".search-box")

editPopupButton.addEventListener("click", openEditStorePopup);
addProductButton.addEventListener("click", openAddProductPopup);

// addProductForm.addEventListener("submit", handleCreateProduct);

searchBox.addEventListener("input", (e) => {
  const searchTerm = e.target.value
  
  const filteredProducts = initialProducts.filter((product) => {
    return product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  })

  renderProducts(filteredProducts)
})

// initialProducts.forEach((product) => {
//   renderProduct(product)
// })

export function openEditStorePopup() {
  // openPopup(editPopup);
  editStorePopup.open()

  storeNameInput.value = storeName.textContent;
}

export function openAddProductPopup() {
  // openPopup(addProductPopup);
  addProductPopup.open()
}

export const editStoreFormValidatior = new FormValidator(formValidationConfig, editStoreForm)
export const addProductFormValidatior = new FormValidator(formValidationConfig, addProductForm)

const editStorePopup = new PopupWithForm(
  "#edit-popup",
  (formValues) => {
    storeName.textContent = formValues['store-name']
  },
  () => editStoreFormValidatior.resetValidation()
)
editStorePopup.setEventListeners()

const addProductPopup = new PopupWithForm(
  "#add-product-popup",
  (formValues) => {
    // initialProducts.push(newProduct)

    const productInstance = new Product({
      name: formValues['product-name'],
      imageUrl: formValues['product-url'],
      price: formValues['product-price']
    })
    const newProduct = productInstance.generateProduct()

    productList.prependItem(newProduct)
  },
  () => addProductFormValidatior.resetValidation()
)
addProductPopup.setEventListeners()

editStoreFormValidatior.enableValidation()
addProductFormValidatior.enableValidation()

const productList = new Section(
  {
    initialItems: initialProducts,
    renderer: (data) => {
      const productInstance = new Product({ name: data.name, imageUrl: data.imageUrl, price: data.price })
      const newProduct = productInstance.generateProduct()
      productList.prependItem(newProduct)
    }
  },
  '.products'
)
productList.renderItems()

import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Product } from "../components/Product.js";
import { formValidation } from "../utils/utils.js";

const editPopupButton = document.querySelector(".header__edit-btn");
const editPopup = document.querySelector("#edit-popup");
const closeEditPopupButton = document.querySelector(".popup__close");
const storeName = document.querySelector(".header__title");
const storeNameInput = document.querySelector(".popup__input_type_name");
const editStoreForm = document.querySelector("#edit-store-form");
const addProductButton = document.querySelector(".section__add-btn");
const addProductPopup = document.querySelector("#add-product-popup");
const addProductForm = document.querySelector("#add-product-form");
const productNameInput = document.querySelector(
  ".popup__input_type_product_name"
);
const productURLInput = document.querySelector(".popup__input_type_url");
const productPriceInput = document.querySelector(".popup__input_type_price");
const productTemplate = document.querySelector("#product-template").content;
const productsContainer = document.querySelector(".products");
const searchBox = document.querySelector(".search-box")

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

// function handleEditStore(event) {
//   event.preventDefault();

//   storeName.textContent = storeNameInput.value;
  
//   closePopup(editPopup);
// }

const editStorePopup = new PopupWithForm(
  '#edit-popup',
  (formValues) => {
    // Receber os valores dos inputs do form
    storeName.textContent = formValues['name']
  },
  () => editStoreFormValidator.resetValidation()
)

// function handleCreateProduct(event) {
//   event.preventDefault();

//   const newProduct = {
//     name: productNameInput.value,
//     imageUrl: productURLInput.value,
//     price: productPriceInput.value,
//   };

//   initialProducts.push(newProduct)
//   renderProduct(newProduct);

//   closePopup(addProductPopup);
//   addProductForm.reset();
// }

const createProductPopup = new PopupWithForm(
  '#add-product-popup',
  (formValues) => {
    const newProduct = {
      name: formValues['product-name'],
      imageUrl: formValues['product-url'],
      price: formValues['product-price'],
    };

    initialProducts.push(newProduct)
    renderProduct(newProduct);
  },
  () => createProductFormValidator.resetValidation()
)

editStorePopup.setEventListeners()
createProductPopup.setEventListeners()

// function handleEscClick(event) {
//   if (event.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_is-opened")
//     closePopup(popupOpened);
//   }
// }

// function openPopup(popup) {
//   popup.classList.add("popup_is-opened");
//   document.addEventListener("keyup", handleEscClick);
// }

function openEditStorePopup() {
  // openPopup(editPopup);
  editStorePopup.open()

  storeNameInput.value = storeName.textContent;
}

function openAddProductPopup() {
  // openPopup(addProductPopup);
  createProductPopup.open()
}

const editStoreFormValidator = new FormValidator(
  formValidation,
  editStoreForm
)
editStoreFormValidator.enableValidation()

const createProductFormValidator = new FormValidator(
  formValidation,
  addProductForm
)
createProductFormValidator.enableValidation()

// function closePopup(popup) {
//   popup.classList.remove("popup_is-opened");
  
//   // reset form
//   if (popup.id === 'edit-popup') {
//     editStoreFormValidator.resetValidation()
//   }

//   if (popup.id === 'add-product-popup') {
//     createProductFormValidator.resetValidation()
//   }

//   document.removeEventListener("keyup", handleEscClick);
// }

function handleClosePopup(event) {
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closePopup(event.currentTarget);
  }
}

function renderProducts(products) {
  // apagar todos os produtos anterioes - div
  while (productsContainer.lastElementChild) {
    productsContainer.removeChild(productsContainer.lastElementChild)
  }

  products.forEach((product) => {
    renderProduct(product)
  })
}

editPopupButton.addEventListener("click", openEditStorePopup);
addProductButton.addEventListener("click", openAddProductPopup);

// editStoreForm.addEventListener("submit", handleEditStore);
// addProductForm.addEventListener("submit", handleCreateProduct);

// editPopup.addEventListener("click", handleClosePopup);
addProductPopup.addEventListener("click", handleClosePopup);

searchBox.addEventListener("input", (e) => {
  const searchTerm = e.target.value
  
  const filteredProducts = initialProducts.filter((product) => {
    return product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  })

  renderProducts(filteredProducts)
})

function renderProduct(product) {
  const productInstance = new Product({ 
    name: product.name,
    imageUrl: product.imageUrl,
    price: product.price 
  })
  const newProduct = productInstance.generateProduct()

  productsContainer.prepend(newProduct);
}

initialProducts.forEach((product) => {
  renderProduct(product);
});



// new FormValidator()
// new FormValidator()
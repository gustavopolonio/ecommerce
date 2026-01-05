// Abrir o popup de editar nome da loja
const editStoreButton = document.querySelector(".header__edit-btn")
const editStorePopup = document.querySelector("#edit-popup")
const addProductButton = document.querySelector(".section__add-btn")
const addProductPopup = document.querySelector("#add-product-popup")
const productTemplate = document.querySelector("#product-template")
const productsList = document.querySelector(".products")

// let popupOpened = null

const initialProducts = [
  {
    title: "Poster 1",
    imageUrl: "poster1.png",
    price: 29.99
  },
  {
    title: "Poster 2",
    imageUrl: "poster2.png",
    price: 49.99
  },
    {
    title: "Poster 3",
    imageUrl: "poster3.png",
    price: 99.99
  },
    {
    title: "Poster 4",
    imageUrl: "poster4.png",
    price: 109.99
  }
]

initialProducts.forEach((product) => {
  const productElement = productTemplate.content.querySelector(".product").cloneNode(true)

  const productTitle = productElement.querySelector(".product__title")
  productTitle.textContent = product.title

  const productImage = productElement.querySelector(".product__image")
  productImage.src = `./images/${product.imageUrl}`
  productImage.alt = product.title

  const productPrice = productElement.querySelector(".product__price")
  productPrice.textContent = `RS${product.price}`

  productsList.append(productElement)
})

function openPopup(popup) {
  popup.classList.add("popup_is-opened")
  document.addEventListener("keyup", handleEscClick)
  // popupOpened = popup
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened")
  document.removeEventListener("keyup", handleEscClick)
}

function handleEscClick(event) {
  if (event.key === "Escape") {
    // Fechar o popup que está aberto
    const openedPopup = document.querySelector(".popup_is-opened")
    closePopup(openedPopup)
  }
}

editStoreButton.addEventListener("click", () => {
  // editStorePopup.classList.add("popup_is-opened")
  openPopup(editStorePopup)
})

addProductButton.addEventListener("click", () => {
  // addProductPopup.classList.add("popup_is-opened")
  openPopup(addProductPopup)
})

function handleClosePopup(event, popup) {
  if (event.target.classList.contains("popup") || event.target.classList.contains("popup__close")) {
    closePopup(popup)
  }
}

addProductPopup.addEventListener("click", (event) => handleClosePopup(event, addProductPopup))
editStorePopup.addEventListener("click", (event) => handleClosePopup(event, editStorePopup))
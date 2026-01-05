// Abrir o popup de editar nome da loja
const editStoreButton = document.querySelector(".header__edit-btn")
const editStorePopup = document.querySelector("#edit-popup")
const addProductButton = document.querySelector(".section__add-btn")
const addProductPopup = document.querySelector("#add-product-popup")

// let popupOpened = null

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
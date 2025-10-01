export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
  }

  _handleEscClick(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  _handleClosePopup(event) {
    if (
      event.target.classList.contains("popup") ||
      event.target.classList.contains("popup__close")
    ) {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (event) => this._handleClosePopup(event));
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");
    document.addEventListener("keyup", (event) => this._handleEscClick(event));
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", (event) => this._handleEscClick(event));

    // Vamos lidar com isso mais pra frente

    // if (popup.id === 'edit-popup') {
    //   editStoreFormValidatior.resetValidation()
    // }
  
    // if (popup.id === 'add-product-popup') {
    //   addProductFormValidatior.resetValidation()
    // }
  }
}
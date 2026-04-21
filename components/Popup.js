export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscClick = this._handleEscClick.bind(this)
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
    document.addEventListener("keyup", this._handleEscClick);
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscClick);

    // Resetar form do popup
    
  }
}
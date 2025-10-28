import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector, handleFormSubmit, handleResetForm) {
    super(popupSelector)

    this._popupForm = this._popupElement.querySelector('.popup__form')
    this._handleFormSubmit = handleFormSubmit
    this._handleResetForm = handleResetForm
  }

  open() {
    img.src = '...'
    title.textContent = '...'

    super.open()
  }
}
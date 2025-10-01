import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleResetForm) {
    super(popupSelector)

    this._popupForm = this._popupElement.querySelector(".popup__form")
    this._handleFormSubmit = handleFormSubmit
    this._handleResetForm = handleResetForm
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input')

    const formValues = {}

    this._inputList.forEach((input) => {
      formValues[input.name] = input.value
    })
      
    return formValues
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault()

      this._handleFormSubmit(this._getInputValues()) // Chamar aqui
      this.close()
    })

    super.setEventListeners()
  }

  close() {
    super.close()
    this._handleResetForm()
  }
}
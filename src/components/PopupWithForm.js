import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit, handleResetForm) {
    super(popupSelector)

    this._popupForm = this._popupElement.querySelector('.popup__form')
    this._handleSubmit = handleSubmit
    this._handleResetForm = handleResetForm
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input') // NodeList

    const formValues = {}

    this._inputList.forEach((input) => {
      // nomeDoInput: valorDoInput
      formValues[input.name] = input.value
    })

    return formValues
  }

  close() {
    super.close()
    // Resetar form
    this._handleResetForm()
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formValues = this._getInputValues()
      this._handleSubmit(formValues)
      this.close()
    })

    super.setEventListeners()    
  }
}
import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, resetFormValidation) {
    super(popupSelector)

    this._popupForm = this._popupElement.querySelector(".popup__form")
    this._handleFormSubmit = handleFormSubmit
    this._resetFormValidation = resetFormValidation
  }

  getInputValues() {
    const formValues = {}
    // Pegar todos os inputs do this._popupForm selectorAll
    // Pegar os valores desses inputs forEach

    // Retornar os valores dos inputs   formValues
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formValues = this.getInputValues()
      this._handleFormSubmit(formValues)
      this.close()
    })

    super.setEventListeners()
  }

  close() {
    super.close()
    this._resetFormValidation()
  }
}
export class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    },
    formElement
  ) {
    this._formSelector = formSelector
    this._inputSelector = inputSelector
    this._submitButtonSelector = submitButtonSelector
    this._inactiveButtonClass = inactiveButtonClass
    this._inputErrorClass = inputErrorClass
    this._errorClass = errorClass

    this._formElement = formElement
  }

  _hideInputError(input) {
    const errorElement = document.querySelector(`#${input.name}-error`)

    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = ""
    input.classList.remove(this._inputErrorClass)
  }

  _showInputError(input, errorMessage) {
    const errorElement = document.querySelector(`#${input.name}-error`)

    errorElement.classList.add(this._errorClass)
    errorElement.textContent = errorMessage
    input.classList.add(this._inputErrorClass)
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input)
    } else {
      this._showInputError(input, input.validationMessage)
    }
  }

  _hasInvalidInput() {
    const hasInvalidInput = this._inputList.some((input) => !input.validity.valid)
    return hasInvalidInput
  }

  _disableSubmitButton() {
    this._submitButton.disabled = true
    this._submitButton.classList.add(this._inactiveButtonClass)
  }

  _enableSubmitButton() {
    this._submitButton.disabled = false
    this._submitButton.classList.remove(this._inactiveButtonClass)
  }

  _toggleButtonState() {
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector)

    if (this._hasInvalidInput()) {
      this._disableSubmitButton()
    } else {
      console.log('entrou')
      this._enableSubmitButton()
    }
  }
  
  _setEventListeners() {
    // pegar o elemento do formulario
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input)
        this._toggleButtonState()
      })
    })
  }

  resetValidation() {
    this._formElement.reset()

    this._inputList.forEach((input) => {
      this._hideInputError(input)
    })
    this._toggleButtonState()
  }

  enableValidation() {
    this._setEventListeners()
    this._toggleButtonState()
  }
}

// function showInputError(
//   formElement,
//   inputElement,
//   inputErrorClass,
//   errorClass,
// ) {
//   inputElement.classList.add(inputErrorClass);

//   const inputErrorElement = formElement.querySelector(
//     `#${inputElement.id}-error`,
//   );

//   inputErrorElement.classList.add(errorClass);
//   inputErrorElement.textContent = inputElement.validationMessage;
// }

// function hideInputError(
//   formElement,
//   inputElement,
//   inputErrorClass,
//   errorClass,
// ) {
//   inputElement.classList.remove(inputErrorClass);

//   const inputErrorElement = formElement.querySelector(
//     `#${inputElement.id}-error`,
//   );

//   inputErrorElement.classList.remove(errorClass);
//   inputErrorElement.textContent = "";
// }

// function isInputValid(
//   formElement,
//   inputElement,
//   { inputErrorClass, errorClass },
// ) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputErrorClass, errorClass);
//   } else {
//     hideInputError(formElement, inputElement, inputErrorClass, errorClass);
//   }
// }

// function hasInvalidInput(inputList) {
//   const hasInvalid = inputList.some((input) => !input.validity.valid);
//   return hasInvalid;
// }

// function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// }

// function enableValidation({
//   formSelector,
//   inputSelector,
//   submitButtonSelector,
//   inactiveButtonClass,
//   ...rest
// }) {
//   const formElement = document.querySelector(formSelector);
//   const formInputs = Array.from(formElement.querySelectorAll(inputSelector)); // NodeList
//   const submitButton = formElement.querySelector(submitButtonSelector);
//   toggleButtonState(formInputs, submitButton, inactiveButtonClass);

//   formInputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       isInputValid(formElement, input, rest);
//       toggleButtonState(formInputs, submitButton, inactiveButtonClass);
//     });
//   });
// }

// export function resetValidation(formElement) {
//   formElement.reset();
//   const inputs = formElement.querySelectorAll(".popup__input");
//   const submitButton = formElement.querySelector(".popup__button");

//   inputs.forEach((input) => {
//     console.log(input);
    
//     const errorElement = formElement.querySelector(`#${input.id}-error`);
//     input.classList.remove("popup__input_type_error");
//     errorElement.classList.remove("popup__error_visible");
//     errorElement.textContent = "";
//   });

//   submitButton.disabled = true;
//   submitButton.classList.add("popup__button_disabled");
// }

// // enableValidation({
// //   formSelector: "#add-product-form",
// //   inputSelector: ".popup__input",
// //   submitButtonSelector: ".popup__button",
// //   inactiveButtonClass: "popup__button_disabled",
// //   inputErrorClass: "popup__input_type_error",
// //   errorClass: "popup__input-error_visible",
// // });

// // enableValidation({
// //   formSelector: "#edit-store-form",
// //   inputSelector: ".popup__input",
// //   submitButtonSelector: ".popup__button",
// //   inactiveButtonClass: "popup__button_disabled",
// //   inputErrorClass: "popup__input_type_error",
// //   errorClass: "popup__input-error_visible",
// // });

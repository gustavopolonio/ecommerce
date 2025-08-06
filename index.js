// Abrir o popup de editar a loja

// 1. pegar o clique no botao do lapis
// 2. Fazer o popup aparecer

const editPopupButton = document.querySelector(".header__edit-btn");
const editPopup = document.querySelector("#edit-popup");
const closeEditPopupButton = document.querySelector(".popup__close");
const storeName = document.querySelector(".header__title");
const storeNameInput = document.querySelector(".popup__input_type_name");
const editStoreForm = document.querySelector("#edit-store-form");

function handleEscClick(event) {
  console.log(event.key);

  if (event.key === "Escape") {
    closePopup();
  }
}

function openPopup() {
  editPopup.classList.add("popup_is-opened");

  storeNameInput.value = storeName.textContent;

  document.addEventListener("keyup", handleEscClick);
}

function closePopup() {
  editPopup.classList.remove("popup_is-opened");

  document.removeEventListener("keyup", handleEscClick);
}

function handleEditStore(event) {
  event.preventDefault();

  const storeNameInputValue = storeNameInput.value;

  if (storeNameInputValue.trim() === "") {
    alert("Input invalido");
    return;
  }

  storeName.textContent = storeNameInput.value;
  closePopup();
}

function handleClosePopup(event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closePopup();
  }
}

editPopupButton.addEventListener("click", openPopup);

editStoreForm.addEventListener("submit", handleEditStore);

editPopup.addEventListener("click", handleClosePopup);

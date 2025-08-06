// Abrir o popup de editar a loja

// 1. pegar o clique no botao do lapis
// 2. Fazer o popup aparecer

const editPopupButton = document.querySelector(".header__edit-btn");
const editPopup = document.querySelector("#edit-popup");
const closeEditPopupButton = document.querySelector(".popup__close");
const storeName = document.querySelector(".header__title");
const storeNameInput = document.querySelector(".popup__input_type_name");
const editStoreForm = document.querySelector("#edit-store-form");
const addProductButton = document.querySelector(".section__add-btn");
const addProductPopup = document.querySelector("#add-product-popup");
const addProductForm = document.querySelector("#add-product-form");
const productNameInput = document.querySelector(
  ".popup__input_type_product_name"
);
const productURLInput = document.querySelector(".popup__input_type_url");
const productPriceInput = document.querySelector(".popup__input_type_price");

function handleEscClick(event) {
  console.log(event.key);

  if (event.key === "Escape") {
    closePopup();
  }
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

function openEditStorePopup() {
  openPopup(editPopup);

  storeNameInput.value = storeName.textContent;

  document.addEventListener("keyup", handleEscClick);
}

function openAddProductPopup() {
  openPopup(addProductPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

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
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closePopup(event.currentTarget);
  }
}

function handleCreateProduct(event) {
  event.preventDefault();

  const productsContainer = document.querySelector(".products");

  productsContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="product">
      <strong class="product__title">${productNameInput.value}</strong>
      <img
        src=${productURLInput.value}
        alt=${productNameInput.value}
        class="product__image"
      />
      <div class="product__price-container">
        <span class="product__price">R$${productPriceInput.value}</span>
        <button class="product__bookmark-btn"></button>
      </div>
    </div>
    `
  );

  closePopup(addProductPopup);
  addProductForm.reset();
}

editPopupButton.addEventListener("click", openEditStorePopup);
addProductButton.addEventListener("click", openAddProductPopup);

editStoreForm.addEventListener("submit", handleEditStore);
addProductForm.addEventListener("submit", handleCreateProduct);

editPopup.addEventListener("click", handleClosePopup);
addProductPopup.addEventListener("click", handleClosePopup);

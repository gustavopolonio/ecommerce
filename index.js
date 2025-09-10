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
const productTemplate = document.querySelector("#product-template").content;
const productsContainer = document.querySelector(".products");

const initialProducts = [
  {
    name: "Poster 1",
    imageUrl: "./images/poster1.png",
    price: "29,99",
  },
  {
    name: "Poster 2",
    imageUrl: "./images/poster2.png",
    price: "39,99",
  },
  {
    name: "Poster 3",
    imageUrl: "./images/poster3.png",
    price: "19,99",
  },
  {
    name: "Poster 4",
    imageUrl: "./images/poster4.png",
    price: "79,99",
  },
];

function handleEscClick(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened")
    closePopup(popupOpened);
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

  document.addEventListener("keyup", handleEscClick);
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
  closePopup(editPopup);
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

  const newProduct = {
    name: productNameInput.value,
    imageUrl: productURLInput.value,
    price: productPriceInput.value,
  };

  renderProduct(newProduct);

  closePopup(addProductPopup);
  addProductForm.reset();
}

editPopupButton.addEventListener("click", openEditStorePopup);
addProductButton.addEventListener("click", openAddProductPopup);

editStoreForm.addEventListener("submit", handleEditStore);
addProductForm.addEventListener("submit", handleCreateProduct);

editPopup.addEventListener("click", handleClosePopup);
addProductPopup.addEventListener("click", handleClosePopup);

function renderProduct(product) {
  const productElement = productTemplate
    .querySelector(".product")
    .cloneNode(true);

  const title = productElement.querySelector(".product__title");
  title.textContent = product.name;

  const image = productElement.querySelector(".product__image");
  image.src = product.imageUrl;
  image.alt = product.name;

  const price = productElement.querySelector(".product__price");
  price.textContent = `R$ ${product.price}`;

  const removeProductButton = productElement.querySelector(
    ".product__remove-btn"
  );

  removeProductButton.addEventListener("click", () => {
    productElement.remove();
  });

  productsContainer.prepend(productElement);
}

initialProducts.forEach((product) => {
  renderProduct(product);
});

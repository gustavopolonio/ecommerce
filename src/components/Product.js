export class Product {
  constructor({name, imageUrl, price}) {
    this._name = name
    this._imageUrl = imageUrl
    this._price = price
  }

  _getTemplate() {
    const template = document.querySelector("#product-template").content
    const productElement = template.querySelector(".product").cloneNode(true);
    return productElement
  }
  
  _handleProductDelete() {
    this._productElement.remove()
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleProductDelete())
  }

  generateProduct() {
    this._productElement = this._getTemplate()

    this._deleteButton = this._productElement.querySelector('.product__remove-btn')

    this._productTitle = this._productElement.querySelector(".product__title")
    this._productTitle.textContent = this._name

    this._productImg = this._productElement.querySelector(".product__image");
    this._productImg.src = this._imageUrl
    this._productImg.alt = this._name;

    this._priceElement = this._productElement.querySelector(".product__price"); 
    this._priceElement.textContent = `R$ ${this._price}`;

    this._setEventListeners()

    return this._productElement
  }
}


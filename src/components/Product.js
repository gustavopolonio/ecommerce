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

  // Criada com Arrow fç - this é o contexto em que a arrow foi criada
  // Criada jeito tradicional - fç é executada

  _deleteProduct() {
    this._productElement.remove()
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._deleteProduct())
  }

  generateProduct() {
    this._productElement = this._getTemplate()

    this._productTitle = this._productElement.querySelector(".product__title")
    this._productTitle.textContent = this._name

    this._productImg = this._productElement.querySelector(".product__image");
    this._productImg.src = this._imageUrl
    this._productImg.alt = this._name;

    this._priceElement = this._productElement.querySelector(".product__price"); 
    this._priceElement.textContent = `R$ ${this._price}`;

    this._deleteButton = this._productElement.querySelector('.product__remove-btn')

    this._setEventListeners()

    return this._productElement
  }
}


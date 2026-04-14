export class Product {
  constructor({ name, imageUrl, price }, productTemplate) {
    this.name = name
    this.imageUrl = imageUrl
    this.price = price
    this.productTemplate = productTemplate
  }

  _getTemplate() {
    const template = document.querySelector(this.productTemplate).content.querySelector(".product").cloneNode(true)
    return template
  }

  // Arrow function
  // não cria o próprio this
  // herdar o this do escopo onde ela foi definida

  // Fç tradicional
  // Cria o proprio this
  // O valor do this é definido na execução da fç

  _handleProductDelete() {
    this.productElement.remove()
  }

  _setEventListeners() {
    // this
    this.removeProductButton.addEventListener('click', () => this._handleProductDelete())
  }

  generateProduct() {
    this.productElement = this._getTemplate()
  
    const productTitle = this.productElement.querySelector(".product__title");
    const productImage = this.productElement.querySelector(".product__image");
    const productPrice = this.productElement.querySelector(".product__price");
    this.removeProductButton = this.productElement.querySelector(
      ".product__remove-btn",
    )

    productTitle.textContent = this.name

    productImage.src = this.imageUrl
    productImage.alt = this.name

    productPrice.textContent = `R$ ${this.price}`

    this._setEventListeners()

    return this.productElement
  }
}
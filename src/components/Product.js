export class Product {
  constructor({ title, imageUrl, price }, productTemplate) {
    this.title = title
    this.imageUrl = imageUrl
    this.price = price
    this.productTemplate = productTemplate
  }

  _handleProductDelete() {
    console.log('this', this);
    this.productElement.remove()
  }

  _getTemplate() {
    const template = document.querySelector(this.productTemplate).content
    const productElement = template.querySelector('.product').cloneNode(true)
    return productElement
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleProductDelete())
  }

  generateProduct() {
    this.productElement = this._getTemplate()

    this._productTitle = this.productElement.querySelector('.product__title')
    this._productImage = this.productElement.querySelector('.product__image')
    this._productPrice = this.productElement.querySelector('.product__price')
    this._deleteButton = this.productElement.querySelector('.product__remove-button')

    this._productTitle.textContent = this.title
    this._productImage.src = this.imageUrl
    this._productImage.alt = this.title
    this._productPrice.textContent = `R$ ${this.price}`

    this._setEventListeners()

    return this.productElement
  }
}

export class Section {
  constructor({ initialItems, renderer }, containerSelector) {
    this._initialItems = initialItems
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderInitialItems() {
    this._initialItems.forEach((item) => {
      // new Product
      this._renderer(item)
    })
  }

  prependItem(item) {
    this._container.prepend(item)
  }
}
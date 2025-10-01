export class Section {
  constructor({ initialItems, renderer }, containerSelector) {
    this._initialItems = initialItems
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderItems() {
    this._initialItems.forEach((item) => {
      this._renderer(item)
    })
  }

  prependItem(item) {
    this._container.prepend(item)
  }
}
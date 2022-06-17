export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(element, append = true) {
    if (append) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }
}

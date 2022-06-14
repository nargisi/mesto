import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }
  open(data) {
    super.open();
    this._popup.querySelector('.popup__image').src = data.image;
    this._popup.querySelector('.popup__fig').alt = data.name;
    this._popup.querySelector('.popup__fig').textContent = data.name;
  }
}

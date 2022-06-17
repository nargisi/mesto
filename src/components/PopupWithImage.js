import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector('.popup__image');
    this._fig = this._popup.querySelector('.popup__fig');
  }
  open(data) {
    super.open();
    this._image.src = data.image;
    this._fig.alt = data.name;
    this._fig.textContent = data.name;
  }
}

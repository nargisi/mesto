import Popup from '../components/Popup.js';
export default class PopupDeleteCard extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setSubmitHandler(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}

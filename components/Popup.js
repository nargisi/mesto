import { ESCAPE } from '../utils/constants.js';

export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }
  _handleEscClose(event) {
    if (
      event.key === ESCAPE &&
      this._popup.classList.contains('popup_opened')
    ) {
      this.close();
    }
  }
  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('popup__close') ||
        event.target === event.currentTarget
      ) {
        this.close();
      }
    });
  }
}

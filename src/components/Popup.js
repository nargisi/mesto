import { ESCAPE } from '../utils/constants.js';

export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._button = this._popup.querySelector('.popup__submit');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setIsLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Сохранить';
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(event) {
    if (event.key === ESCAPE) {
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

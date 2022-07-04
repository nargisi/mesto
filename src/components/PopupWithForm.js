import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  setInputValues(data) {
    for (const key in data) {
      const input = this._form.elements[key];
      if (input) {
        input.value = data[key];
      }
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setIsLoading(true);
      this._handleFormSubmit(this._getInputValues()).finally(() => {
        this.setIsLoading(false);
      });
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

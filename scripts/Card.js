export default class Card {
  constructor(data, selector, handleView) {
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._selector = selector;
    this._handleView = handleView;
  }

  _getTemplate() {
    const template = document.querySelector(this._selector).content;
    return template.cloneNode(true);
  }

  generate() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.element__mask-group');
    this._image.src = this._link;
    this._image.alt = this._description;
    this._card.querySelector('.element__text').textContent = this._name;
    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._card
      .querySelector('.element__group')
      .addEventListener('click', this._handleClickLike);

    this._card
      .querySelector('.element__basket')
      .addEventListener('click', this._handleRemove);

    this._image.addEventListener('click', () =>
      this._handleView(this._name, this._link)
    );
  }

  _handleClickLike = (event) => {
    event.target.classList.toggle('element__group_active');
  };

  _handleRemove = (event) => {
    event.target.closest('.element').remove();
    this._card = null;
  };
}

export default class Card {
  constructor(data, selector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document.querySelector(this._selector).content;
  }

  generate() {
    this._card = this._getTemplate().querySelector('.element').cloneNode(true);
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
      this._handleCardClick(this._name, this._link)
    );
  }

  _handleClickLike = (event) => {
    event.target.classList.toggle('element__group_active');
  };

  _handleRemove = () => {
    this._card.remove();
    this._card = null;
  };
}

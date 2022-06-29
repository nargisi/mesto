const ownerId = 'b8fd61bcae720e79e3bcc110';
export default class Card {
  constructor(data, selector, handleCardClick, handleCardRemove) {
    this._name = data.name;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._link = data.link;
    this._description = data.description;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
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
    if (this._ownerId === ownerId) {
      this._card
        .querySelector('.element__basket')
        .classList.remove('element__basket_unvisible');
    }

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
    this._handleCardRemove(this._id, () => {
      this._card.remove();
      this._card = null;
    });
  };
}

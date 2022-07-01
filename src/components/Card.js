import { ownerId } from '../utils/constants.js';
export default class Card {
  constructor(
    data,
    selector,
    handleCardClick,
    handleCardRemove,
    handleCardLike
  ) {
    this._name = data.name;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._link = data.link;
    this._description = data.description;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._handleCardLike = handleCardLike;
    this._isLiked = Boolean(this._likes.find((like) => like._id === ownerId));
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
    this._card.querySelector('.element__counter').textContent =
      this._likes.length;
    this._setEventListeners();
    if (this._ownerId === ownerId) {
      this._card
        .querySelector('.element__basket')
        .classList.remove('element__basket_unvisible');
    }
    if (this._isLiked) {
      this._card
        .querySelector('.element__group')
        .classList.add('element__group_active');
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
    this._handleCardLike(this._id, !this._isLiked, (likes) => {
      this._likes = likes;
      this._card.querySelector('.element__counter').textContent =
        this._likes.length;
      if (!this._isLiked) {
        event.target.classList.add('element__group_active');
      }
      if (this._isLiked) {
        event.target.classList.remove('element__group_active');
      }
      this._isLiked = !this._isLiked;
    });
  };

  _handleRemove = () => {
    this._handleCardRemove(this._id, () => {
      this._card.remove();
      this._card = null;
    });
  };
}

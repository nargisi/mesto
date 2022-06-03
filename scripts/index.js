import Card from './Card.js';
import FormValidator from './FormValidator.js';

import { initialCards } from './constants.js';
import { dataValidator } from './constants.js';

const elementsList = document.querySelector('.elements');

// Переменные для редактирования профиля
const popupProfileOpenButton = document.querySelector('.profile__info-button');
const popupProfile = document.querySelector('.popup_profile');

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');

// Переменные для добавления фото
const popupAddPhotoOpenButton = document.querySelector('.profile__button');
const popupAddPhoto = document.querySelector('.popup_add');

const placeText = document.querySelector('.popup__input_type_place');
const hrefText = document.querySelector('.popup__input_type_href');

//Переменные для просмотра фото

const viewCard = document.querySelector('.popup__image');
const viewCardName = document.querySelector('.popup__fig');
const popupViewCard = document.querySelector('.popup_image');

//Переменная для поиска всех крестиков закрытия
const popups = document.querySelectorAll('.popup');

const ESCAPE = 'Escape';

// Находим форму редактирования профиля в DOM
const formProfile = document.querySelector('.popup__form_type_profile');

// Находим форму добавления фото в DOM
const formAdd = document.querySelector('.popup__form_type_add');

const createCard = (initialCardsInfo, selector, handleView) => {
  const newCard = new Card(initialCardsInfo, selector, handleView);

  return newCard.generate();
};

// Обработчик просмотра фото

const handleView = (name, src) => {
  viewCard.src = src;
  viewCardName.textContent = name;
  viewCard.alt = name;
  openPopup(popupViewCard);
};

// Обработчик добавления фото
const handleSubmitNewCard = (event) => {
  event.preventDefault();

  const cardItem = createCard(
    {
      name: placeText.value,
      description: placeText.value,
      link: hrefText.value,
    },
    '#cards-template',
    handleView
  );

  closePopupAddPhoto();
  formAdd.reset();
  addValidator.disableButton();

  elementsList.prepend(cardItem);
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup(popupProfile);
};

// Обработчик события keydown

const handleEsc = (event) => {
  if (event.key === ESCAPE) {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
};

initialCards.forEach((initialCardsInfo) => {
  const cardElement = createCard(
    initialCardsInfo,
    '#cards-template',
    handleView
  );
  elementsList.append(cardElement);
});

// Функции открытия и закрытия попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
};

const openPopupProfile = () => {
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
  openPopup(popupProfile);
};

const openPopupAddPhoto = () => {
  openPopup(popupAddPhoto);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
};

const closePopupAddPhoto = () => {
  closePopup(popupAddPhoto);
};

//Слушатель для всех крестиков закрытия
popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('popup__close') ||
      event.target === event.currentTarget
    ) {
      closePopup(popup);
    }
  });
});

popupProfileOpenButton.addEventListener('click', openPopupProfile);

popupAddPhotoOpenButton.addEventListener('click', openPopupAddPhoto);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleProfileFormSubmit);

//Прикрепляем обработчик к форме добавления фото:

formAdd.addEventListener('submit', handleSubmitNewCard);

//Настраиваем валидацию форм

const profileValidator = new FormValidator(dataValidator, formProfile);

profileValidator.enableValidation();

const addValidator = new FormValidator(dataValidator, formAdd);

addValidator.enableValidation();

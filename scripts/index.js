import Card from './Card.js';

const initialCards = [
  {
    name: 'Цветы',
    link: 'https://images.unsplash.com/photo-1650490558436-b7d0c79b5baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Цветы',
  },
  {
    name: 'Море',
    link: 'https://images.unsplash.com/photo-1650421495518-909969ad51d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Море',
  },
  {
    name: 'Тюльпаны',
    link: 'https://images.unsplash.com/photo-1650491020292-d583fc858a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Тюльпаны',
  },
  {
    name: 'Пироженое',
    link: 'https://images.unsplash.com/photo-1650419424455-d0513aaf0dd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Пироженое',
  },
  {
    name: 'Лазурное море',
    link: 'https://images.unsplash.com/photo-1650421494236-abf227e9cdfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Лазурное море',
  },
  {
    name: 'Вид во внутренний дворик',
    link: 'https://images.unsplash.com/photo-1650402659504-b37b31a80ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    description: 'Вид во внутренний дворик',
  },
];

const elementsList = document.querySelector('.elements');
// const elementsTemplate = document.querySelector('#cards-template').content;

// Переменные для редактирования профиля
const popupProfileOpenButton = document.querySelector('.profile__info-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close');

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');

// Переменные для добавления фото
const popupAddPhotoOpenButton = document.querySelector('.profile__button');
const popupAddPhoto = document.querySelector('.popup_add');
const popupAddPhotoCloseButton = popupAddPhoto.querySelector(
  '.popup__close_type_add'
);
const popupAddPhotoSubmit = popupAddPhoto.querySelector(
  '.popup__submit_type_photo'
);

const placeText = document.querySelector('.popup__input_type_place');
const hrefText = document.querySelector('.popup__input_type_href');

//Переменные для просмотра фото
const viewCardTemplate = document
  .querySelector('#cards-template')
  .content.querySelector('.element__mask-group');
const closeViewCard = document.querySelector('.popup__close_type_image');
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

// // Обработчики
// const handleRemove = (event) => {
//   event.target.closest('.element').remove();
// };

// const handleClickLike = (event) => {
//   event.target.classList.toggle('element__group_active');
// };

const handleView = (event) => {
  const src = event.target.src;
  const name = event.target
    .closest('.element')
    .querySelector('.element__text').textContent;
  viewCard.src = src;
  viewCardName.textContent = name;
  viewCard.alt = name;
  openPopup(popupViewCard);
};

// Обработчик добавления фото
const handleSubmitNewCard = (event) => {
  event.preventDefault();

  const newCard = new Card(
    {
      name: placeText.value,
      description: placeText.value,
      link: hrefText.value,
    },
    '#cards-template',
    handleView
  );
  const cardItem = newCard.generate();

  closePopupAddPhoto();
  formAdd.reset();
  popupAddPhotoSubmit.classList.add('popup__submit_disabled');
  popupAddPhotoSubmit.setAttribute('disabled', 'disabled');

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

//Генерация карточки
// const generateCard = (imageData) => {
//   const cardElement = elementsTemplate.cloneNode(true);
//   const imageElement = cardElement.querySelector('.element__mask-group');

//   cardElement.querySelector('.element__text').textContent = imageData.name;
//   imageElement.src = imageData.link;
//   imageElement.alt = imageData.description;

//   const clickLikeButton = cardElement.querySelector('.element__group');
//   clickLikeButton.addEventListener('click', handleClickLike);

//   const removeCardButton = cardElement.querySelector('.element__basket');
//   removeCardButton.addEventListener('click', handleRemove);

//   imageElement.addEventListener('click', handleView);

//   return cardElement;
// };

initialCards.forEach((initialCardsInfo) => {
  const newCard = new Card(initialCardsInfo, '#cards-template', handleView);
  const cardElement = newCard.generate();
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
    if (event.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
    if (event.target === event.currentTarget) {
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

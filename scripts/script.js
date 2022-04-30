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
const elementsTemplate = document.querySelector('#cards-template').content;

// Переменные для редактирования профиля
const openPopupButton = document.querySelector('.profile__info-button');
const popupProfile = document.querySelector('.popup_profile');
const closePopupButton = popupProfile.querySelector('.popup__close');

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');

// Переменные для добавления фото
const openPopupAddPhotoButton = document.querySelector('.profile__button');
const popupAddPhoto = document.querySelector('.popup_add');
const closePopupAddPhotoButton = popupAddPhoto.querySelector(
  '.popup__close_type_add'
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

// Находим форму редактирования профиля в DOM
const formElement = document.querySelector('.popup__form');

// Находим форму добавления фото в DOM
const formAdd = document.querySelector('.popup__form_type_add');

// Обработчики
const handleRemove = (event) => {
  event.target.closest('.element').remove();
};

const handleClickLike = (event) => {
  event.target.classList.toggle('element__group_active');
};

const handleView = (event) => {
  const src = event.target.src;
  const name = event.target
    .closest('.element')
    .querySelector('.element__text').textContent;
  viewCard.src = src;
  viewCardName.textContent = name;
  viewCard.alt = name;
  popupOpen(popupViewCard);
};

// Обработчик добавления фото
const handleSubmitNewCard = (event) => {
  event.preventDefault();

  const newCard = generateCard({
    name: placeText.value,
    description: placeText.value,
    link: hrefText.value,
  });
  popupAddPhotoClose();
  formAdd.reset();
  elementsList.prepend(newCard);
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  popupClose(popupProfile);
};

function handlePopupProfileOverlayClick(event) {
  if (event.target === event.currentTarget) {
    popupProfileClose();
  }
}

function handlePopupAddPhotoOverlayClick(event) {
  if (event.target === event.currentTarget) {
    popupAddPhotoClose();
  }
}

function handlePopupViewCardOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeViewingCard();
  }
}

//Генерация карточки
const generateCard = (imageData) => {
  const cardElement = elementsTemplate.cloneNode(true);
  const imageElement = cardElement.querySelector('.element__mask-group');
  cardElement.querySelector('.element__text').textContent = imageData.name;
  imageElement.src = imageData.link;
  imageElement.alt = imageData.description;

  const clickLikeButton = cardElement.querySelector('.element__group');
  clickLikeButton.addEventListener('click', handleClickLike);
  const removeCardButton = cardElement.querySelector('.element__basket');
  removeCardButton.addEventListener('click', handleRemove);

  imageElement.addEventListener('click', handleView);
  return cardElement;
};

initialCards.forEach((initialCardsInfo) => {
  const newCard = generateCard({
    name: initialCardsInfo.name,
    description: initialCardsInfo.description,
    link: initialCardsInfo.link,
  });
  elementsList.append(newCard);
});

// Функции открытия и закрытия попапов
const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
  // popup.addEventListener('keydown', (evt) => {
  //   console.log(evt);
  // });
};

const popupProfileOpen = () => {
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
  popupOpen(popupProfile);
};

const popupAddPhotoOpen = () => {
  popupOpen(popupAddPhoto);
};

const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
  // popup.removeEventListener('keydown', () => {});
};

const popupProfileClose = () => {
  popupClose(popupProfile);
};

const popupAddPhotoClose = () => {
  popupClose(popupAddPhoto);
};

const closeViewingCard = () => {
  popupClose(popupViewCard);
};

//Слушатель для всех крестиков закрытия
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      popupClose(popup);
    }
  });
});

openPopupButton.addEventListener('click', popupProfileOpen);

openPopupAddPhotoButton.addEventListener('click', popupAddPhotoOpen);

popupProfile.addEventListener('click', handlePopupProfileOverlayClick);

popupAddPhoto.addEventListener('click', handlePopupAddPhotoOverlayClick);

popupViewCard.addEventListener('click', handlePopupViewCardOverlayClick);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleProfileFormSubmit);

//Прикрепляем обработчик к форме добавления фото:

formAdd.addEventListener('submit', handleSubmitNewCard);

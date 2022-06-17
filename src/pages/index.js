import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

import {
  initialCards,
  elementsListSelector,
  dataValidator,
  popupProfileOpenButton,
  popupAddPhotoOpenButton,
  formProfile,
  formAdd,
} from '../utils/constants.js';

const popupAddPhoto = new PopupWithForm('.popup_add', ({ place, href }) => {
  const card = createCard(
    { name: place, link: href, description: place },
    '#cards-template',
    handleCardClick
  );

  cardList.addItem(card, false);
});

const createCard = (initialCardsInfo, selector, handleCardClick) => {
  const newCard = new Card(initialCardsInfo, selector, handleCardClick);

  return newCard.generate();
};

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
});

const popupProfile = new PopupWithForm('.popup_profile', (formData) => {
  userInfo.setUserInfo(formData);
});
const popupViewCard = new PopupWithImage('.popup_image');

const popups = [popupAddPhoto, popupProfile, popupViewCard];

// Обработчик просмотра фото

const handleCardClick = (name, src) => {
  popupViewCard.open({ image: src, name });
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (initialCardsInfo) => {
      const cardElement = createCard(
        initialCardsInfo,
        '#cards-template',
        handleCardClick
      );
      cardList.addItem(cardElement);
    },
  },
  elementsListSelector
);
cardList.renderItems();

//Функции открытия и закрытия попапов

const openPopupProfile = () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo());
};

const openPopupAddPhoto = () => {
  popupAddPhoto.open();
  addValidator.disableButton();
};

//Слушатель для всех крестиков закрытия

popups.forEach((popup) => {
  popup.setEventListeners();
});

popupProfileOpenButton.addEventListener('click', openPopupProfile);

popupAddPhotoOpenButton.addEventListener('click', openPopupAddPhoto);

//Настраиваем валидацию форм

const profileValidator = new FormValidator(dataValidator, formProfile);

profileValidator.enableValidation();

const addValidator = new FormValidator(dataValidator, formAdd);

addValidator.enableValidation();

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';
import './index.css';

import {
  elementsListSelector,
  dataValidator,
  popupProfileOpenButton,
  popupAddPhotoOpenButton,
  formProfile,
  formAdd,
  title,
  subtitle,
  avatar,
} from '../utils/constants.js';

let cardList;

const API_Config = {
  baseURL: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '413ddd3a-fff9-444b-99b1-64e1cf71ff3f',
    'Content-Type': 'application/json',
  },
};
const api = new Api(API_Config);

api.getUserInfo().then((data) => {
  title.textContent = data.name;
  subtitle.textContent = data.about;
  avatar.src = data.avatar;
});

api.getInitialCards().then((data) => {
  cardList = new Section(
    {
      items: data,
      renderer: (initialCardsInfo) => {
        const cardElement = createCard(
          initialCardsInfo,
          '#cards-template',
          handleCardClick,
          handleCardRemove
        );
        cardList.addItem(cardElement);
      },
    },
    elementsListSelector
  );
  cardList.renderItems();
});

const popupAddPhoto = new PopupWithForm('.popup_add', (data) => {
  api.addNewCard(data).then(({ name, link, owner, _id }) => {
    const card = createCard(
      { name, link, description: name, owner, _id },
      '#cards-template',
      handleCardClick,
      handleCardRemove
    );
    cardList.addItem(card, false);
  });
});

const createCard = (
  initialCardsInfo,
  selector,
  handleCardClick,
  handleCardRemove
) => {
  const newCard = new Card(
    initialCardsInfo,
    selector,
    handleCardClick,
    handleCardRemove
  );

  return newCard.generate();
};

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
});

const popupProfile = new PopupWithForm('.popup_profile', (formData) => {
  api.updateProfile(formData).then(({ name, about }) => {
    userInfo.setUserInfo({ name, job: about });
  });
});
const popupViewCard = new PopupWithImage('.popup_image');

const popupDeleteCardImage = new PopupDeleteCard('.popup_ask');

const popups = [
  popupAddPhoto,
  popupProfile,
  popupViewCard,
  popupDeleteCardImage,
];

// Обработчик просмотра фото

const handleCardClick = (name, src) => {
  popupViewCard.open({ image: src, name });
};

const handleCardRemove = (id, callback) => {
  popupDeleteCardImage.open();
  popupDeleteCardImage.setSubmitHandler(() => {
    api.deleteOwnCard(id).then(() => {
      callback();
    });
  });
};

//Функции открытия и закрытия попапов

const openPopupProfile = () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo());
};

const openPopupAddPhoto = () => {
  popupAddPhoto.open();
  addValidator.disableButton();
};

// const openPopupDeleteCard = () => {
//   popupDeleteCardImage.open();
// };

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

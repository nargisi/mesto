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
  editAvatar,
  API_Config,
} from '../utils/constants.js';

let cardList;

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
          handleCardRemove,
          handleCardLike
        );
        cardList.addItem(cardElement);
      },
    },
    elementsListSelector
  );
  cardList.renderItems();
});

const popupAddPhoto = new PopupWithForm('.popup_add', (data) => {
  return api.addNewCard(data).then(({ name, link, owner, _id, likes }) => {
    const card = createCard(
      { name, link, description: name, owner, _id, likes },
      '#cards-template',
      handleCardClick,
      handleCardRemove,
      handleCardLike
    );
    cardList.addItem(card, false);
  });
});

const createCard = (
  initialCardsInfo,
  selector,
  handleCardClick,
  handleCardRemove,
  handleCardLike
) => {
  const newCard = new Card(
    initialCardsInfo,
    selector,
    handleCardClick,
    handleCardRemove,
    handleCardLike
  );

  return newCard.generate();
};

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar',
});

const popupProfile = new PopupWithForm('.popup_profile', (formData) => {
  return api.updateProfile(formData).then(({ name, about }) => {
    userInfo.setUserInfo({ name, job: about });
  });
});
const popupViewCard = new PopupWithImage('.popup_image');

const popupDeleteCardImage = new PopupDeleteCard('.popup_ask');

const popupEditUserAvatar = new PopupWithForm('.popup_update', ({ href }) => {
  return api.editUserAvatar(href).then(() => {
    userInfo.setUserAvatar(href);
  });
});

const popups = [
  popupAddPhoto,
  popupProfile,
  popupViewCard,
  popupDeleteCardImage,
  popupEditUserAvatar,
];

// Обработчик просмотра фото

const handleCardClick = (name, src) => {
  popupViewCard.open({ image: src, name });
};

// Обработчик удаления карточки
const handleCardRemove = (id, callback) => {
  popupDeleteCardImage.open();
  popupDeleteCardImage.setSubmitHandler(() => {
    api.deleteOwnCard(id).then(() => {
      callback();
    });
  });
};

// Обработчик лайка карточки
const handleCardLike = (id, isLike, callback) => {
  api.changeCardLike(id, isLike).then(({ likes }) => {
    callback(likes);
  });
};

// Функции открытия и закрытия попапов

const openPopupProfile = () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo());
};

const openPopupAddPhoto = () => {
  popupAddPhoto.open();
  addValidator.disableButton();
};

const openPopupEditUserAvatar = () => {
  popupEditUserAvatar.open();
};

//Слушатель для всех крестиков закрытия

popups.forEach((popup) => {
  popup.setEventListeners();
});

popupProfileOpenButton.addEventListener('click', openPopupProfile);

popupAddPhotoOpenButton.addEventListener('click', openPopupAddPhoto);

editAvatar.addEventListener('click', openPopupEditUserAvatar);

//Настраиваем валидацию форм

const profileValidator = new FormValidator(dataValidator, formProfile);

profileValidator.enableValidation();

const addValidator = new FormValidator(dataValidator, formAdd);

addValidator.enableValidation();

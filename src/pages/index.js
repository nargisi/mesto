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
  formChangeProfile,
} from '../utils/constants.js';

let cardList;

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar',
});

const api = new Api(API_Config);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    title.textContent = userData.name;
    subtitle.textContent = userData.about;
    avatar.src = userData.avatar;

    userInfo.setUserInfo({ _id: userData._id });
    cardList = new Section(
      {
        items: cardsData,
        renderer: (initialCardsInfo) => {
          const cardElement = createCard(
            initialCardsInfo,
            '#cards-template',
            handleCardClick,
            handleCardRemove,
            handleCardLike,
            userData._id
          );
          cardList.addItem(cardElement);
        },
      },
      elementsListSelector
    );
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const popupAddPhoto = new PopupWithForm('.popup_add', (data) => {
  return api
    .addNewCard(data)
    .then(({ name, link, owner, _id, likes }) => {
      const card = createCard(
        { name, link, description: name, owner, _id, likes },
        '#cards-template',
        handleCardClick,
        handleCardRemove,
        handleCardLike,
        userInfo.getUserInfo().id
      );
      cardList.addItem(card, false);
      popupAddPhoto.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

const createCard = (
  initialCardsInfo,
  selector,
  handleCardClick,
  handleCardRemove,
  handleCardLike,
  myId
) => {
  const newCard = new Card(
    initialCardsInfo,
    selector,
    handleCardClick,
    handleCardRemove,
    handleCardLike,
    myId
  );

  return newCard.generate();
};

const popupProfile = new PopupWithForm('.popup_profile', (formData) => {
  return api
    .updateProfile(formData)
    .then(({ name, about }) => {
      userInfo.setUserInfo({ name, job: about });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
const popupViewCard = new PopupWithImage('.popup_image');

const popupDeleteCardImage = new PopupDeleteCard('.popup_ask');

const popupEditUserAvatar = new PopupWithForm('.popup_update', ({ href }) => {
  return api
    .editUserAvatar(href)
    .then(() => {
      userInfo.setUserInfo({ avatar: href });
      popupEditUserAvatar.close();
    })
    .catch((err) => {
      console.log(err);
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
    api
      .deleteOwnCard(id)
      .then(() => {
        callback();
        popupDeleteCardImage.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// Обработчик лайка карточки
const handleCardLike = (id, isLike, callback) => {
  api
    .changeCardLike(id, isLike)
    .then(({ likes }) => {
      callback(likes);
    })
    .catch((err) => {
      console.log(err);
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
  addValidator.disableButton();
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

const changeProfileValidator = new FormValidator(
  dataValidator,
  formChangeProfile
);

changeProfileValidator.enableValidation();

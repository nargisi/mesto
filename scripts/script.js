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

const openPopupButton = document.querySelector('.profile__info-button');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close');

const nameInput = popup.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = popup.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()

const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');
// Находим форму в DOM
const formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()

// Находим форму добавления фото в DOM
const formImage = document.querySelector('.popup__form_type_image');

const placeText = document.querySelector('.popup__input_type_place');
const hrefText = document.querySelector('.popup__input_type_href');

const addButton = document.querySelector('.profile__button');
const cardContainer = document.querySelector('.element__mask-group');

// Находим темплейт и в нем карточку в теге li
// initialCardsTemplate = document
//   .querySelector('#cards-template')
//   .content.querySelector('.element');

// Добавили карточки из массива в разметку
initialCards.forEach(function (initialCardsInfo) {
  const cardsElement = elementsTemplate.cloneNode(true);
  cardsElement.querySelector('.element__text').textContent =
    initialCardsInfo.name;
  cardsElement.querySelector('.element__mask-group').src =
    initialCardsInfo.link;
  cardsElement.querySelector('.element__mask-group').alt =
    initialCardsInfo.description;
  const clickLikeButton = cardsElement.querySelector('.element__group');
  clickLikeButton.addEventListener('click', () => clickLike(clickLikeButton));
  const removeCardButton = cardsElement.querySelector('.element__basket');
  removeCardButton.addEventListener('click', () => removeCard(cardsElement));
  elementsList.append(cardsElement);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  popupClose();
}

// Обработчик добавления фото
function formSubmitHandlerAddCards(evt) {
  evt.preventDefault;
  addPhoto();
}

function popupOpen() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}

function popupClose() {
  popup.classList.toggle('popup_opened');
}

function clickLike(clickLikeButton) {
  clickLikeButton.classList.toggle('element__group_active');
}

function removeCard(cardsElement) {
  cardsElement.remove();
}
openPopupButton.addEventListener('click', popupOpen);

closePopupButton.addEventListener('click', popupClose);

addButton.addEventListener('click', addPhoto);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//Прикрепляем обработчик к форме добавления фото:

formImage.addEventListener('submit', formSubmitHandlerAddCards);

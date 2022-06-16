export const initialCards = [
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

export const dataValidator = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
};

export const elementsListSelector = '.elements';

export const ESCAPE = 'Escape';

export const popupProfileOpenButton = document.querySelector(
  '.profile__info-button'
);

export const formProfile = document.querySelector('.popup__form_type_profile');

export const formAdd = document.querySelector('.popup__form_type_add');

export const popupAddPhotoOpenButton =
  document.querySelector('.profile__button');

export const popupAddPhotoSubmit = document.querySelector('.popup__submi');

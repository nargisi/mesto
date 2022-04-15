const openPopupButton = document.querySelector('.profile__info-button');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close');


const nameInput = popup.querySelector('.popup__input_name')// Воспользуйтесь инструментом .querySelector()
const jobInput = popup.querySelector('.popup__input_job')// Воспользуйтесь инструментом .querySelector()

const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');


function popupOpen () {
    popup.classList.toggle('popup_opened');
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
}

function popupClose () {
    popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', popupOpen);
    
closePopupButton.addEventListener('click', popupClose);


// Находим форму в DOM
const formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

export default class FormValidator {
  constructor(data, form) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

  _showErrorMessage = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideErrorMessage = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClasss);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = ' ';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement, inputElement.validationMessage);
    } else {
      this._hideErrorMessage(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventsListeners = () => {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventsListeners();
  };
}
// const showErrorMessage = (formElement, inputElement, errorMessage, options) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(options.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(options.errorClass);
// };

// const hideErrorMessage = (formElement, inputElement, options) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(options.inputErrorClass);
//   errorElement.classList.remove(options.errorClass);
//   errorElement.textContent = ' ';
// };

// const isValid = (formElement, inputElement, options) => {
//   if (!inputElement.validity.valid) {
//     showErrorMessage(
//       formElement,
//       inputElement,
//       inputElement.validationMessage,
//       options
//     );
//   } else {
//     hideErrorMessage(formElement, inputElement, options);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, options) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(options.inactiveButtonClass);
//     buttonElement.setAttribute('disabled', 'disabled');
//   } else {
//     buttonElement.classList.remove(options.inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// };

// const setEventsListeners = (formElement, options) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(options.inputSelector)
//   );
//   const buttonElement = formElement.querySelector(options.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, options);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, options);
//       toggleButtonState(inputList, buttonElement, options);
//     });
//   });
// };

// const enableValidation = (options) => {
//   const formList = Array.from(document.querySelectorAll(options.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventsListeners(formElement, options);
//   });
// };

// enableValidation({
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error',
// });

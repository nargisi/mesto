(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"},t=document.querySelector(".profile__info-button"),n=document.querySelector(".popup__form_type_profile"),r=document.querySelector(".popup__form_type_add"),o=document.querySelector(".profile__button"),i=document.querySelector(".profile__title"),a=document.querySelector(".profile__subtitle"),c=document.querySelector(".profile__avatar"),u=document.querySelector(".profile__edit"),s="b8fd61bcae720e79e3bcc110";function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t,n,r,o,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_handleClickLike",(function(e){a._handleCardLike(a._id,!a._isLiked,(function(t){a._likes=t,a._card.querySelector(".element__counter").textContent=a._likes.length,a._isLiked||e.target.classList.add("element__group_active"),a._isLiked&&e.target.classList.remove("element__group_active"),a._isLiked=!a._isLiked}))})),f(this,"_handleRemove",(function(){a._handleCardRemove(a._id,(function(){a._card.remove(),a._card=null}))})),this._name=t.name,this._id=t._id,this._ownerId=t.owner._id,this._link=t.link,this._description=t.description,this._likes=t.likes,this._selector=n,this._handleCardClick=r,this._handleCardRemove=o,this._handleCardLike=i,this._isLiked=Boolean(this._likes.find((function(e){return e._id===s})))}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content}},{key:"generate",value:function(){return this._card=this._getTemplate().querySelector(".element").cloneNode(!0),this._image=this._card.querySelector(".element__mask-group"),this._image.src=this._link,this._image.alt=this._description,this._card.querySelector(".element__text").textContent=this._name,this._card.querySelector(".element__counter").textContent=this._likes.length,this._setEventListeners(),this._ownerId===s&&this._card.querySelector(".element__basket").classList.remove("element__basket_unvisible"),this._isLiked&&this._card.querySelector(".element__group").classList.add("element__group_active"),this._card}},{key:"_setEventListeners",value:function(){var e=this;this._card.querySelector(".element__group").addEventListener("click",this._handleClickLike),this._card.querySelector(".element__basket").addEventListener("click",this._handleRemove),this._image.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_showErrorMessage",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),d(this,"_hideErrorMessage",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=" "})),d(this,"_isValid",(function(e){e.validity.valid?r._hideErrorMessage(e):r._showErrorMessage(e,e.validationMessage)})),d(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),d(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),d(this,"_setEventsListeners",(function(){r._inputList=Array.from(r._form.querySelectorAll(r._inputSelector)),r._buttonElement=r._form.querySelector(r._submitButtonSelector),r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState()}))}))})),d(this,"enableValidation",(function(){r._setEventsListeners()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n}var t,n;return t=e,(n=[{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this._container.append(e):this._container.prepend(e)}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._button=this._popup.querySelector(".popup__submit"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"setIsLoading",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранить"}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target===t.currentTarget)&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function j(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){for(var t in e)this._form.elements[t].value=e[t]}},{key:"setEventListeners",value:function(){var e=this;w(O(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.setIsLoading(!0),e._handleFormSubmit(e._getInputValues()).finally((function(){e.setIsLoading(!1),e.close()}))}))}},{key:"close",value:function(){w(O(a.prototype),"close",this).call(this),this._form.reset()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._fig=t._popup.querySelector(".popup__fig"),t}return t=a,(n=[{key:"open",value:function(e){R(B(a.prototype),"open",this).call(this),this._image.src=e.image,this._fig.alt=e.name,this._fig.textContent=e.name}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.job}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}}],n&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=M(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function H(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;N(J(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}))}},{key:"close",value:function(){N(J(a.prototype),"close",this).call(this)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K,Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseURL=t.baseURL,this._headers=t.headers}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseURL,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseURL,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateProfile",value:function(e){var t=e.name,n=e.job;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addNewCard",value:function(e){var t=e.place,n=e.href;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteOwnCard",value:function(e){return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeCardLike",value:function(e,t){return fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}}],n&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=new Q({baseURL:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"413ddd3a-fff9-444b-99b1-64e1cf71ff3f","Content-Type":"application/json"}});W.getUserInfo().then((function(e){i.textContent=e.name,a.textContent=e.about,c.src=e.avatar})),W.getInitialCards().then((function(e){(K=new b({items:e,renderer:function(e){var t=Y(e,"#cards-template",re,oe,ie);K.addItem(t)}},".elements")).renderItems()}));var X=new L(".popup_add",(function(e){return W.addNewCard(e).then((function(e){var t=e.name,n=e.link,r=e.owner,o=e._id,i=e.likes,a=Y({name:t,link:n,description:t,owner:r,_id:o,likes:i},"#cards-template",re,oe,ie);K.addItem(a,!1)}))})),Y=function(e,t,n,r,o){return new p(e,t,n,r,o).generate()},Z=new V({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),$=new L(".popup_profile",(function(e){return W.updateProfile(e).then((function(e){var t=e.name,n=e.about;Z.setUserInfo({name:t,job:n})}))})),ee=new U(".popup_image"),te=new z(".popup_ask"),ne=new L(".popup_update",(function(e){var t=e.href;return W.editUserAvatar(t).then((function(){Z.setUserAvatar(t)}))})),re=function(e,t){ee.open({image:t,name:e})},oe=function(e,t){te.open(),te.setSubmitHandler((function(){W.deleteOwnCard(e).then((function(){t()}))}))},ie=function(e,t,n){W.changeCardLike(e,t).then((function(e){var t=e.likes;n(t)}))};[X,$,ee,te,ne].forEach((function(e){e.setEventListeners()})),t.addEventListener("click",(function(){$.open(),$.setInputValues(Z.getUserInfo())})),o.addEventListener("click",(function(){X.open(),ae.disableButton()})),u.addEventListener("click",(function(){ne.open()})),new _(e,n).enableValidation();var ae=new _(e,r);ae.enableValidation()})();
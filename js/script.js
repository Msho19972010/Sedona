const popup = document.querySelector(".modal");
const popupButton = document.querySelector(".booking__button");
const form = popup.querySelector(".booking-form");
const formButton = popup.querySelector(".form-button");
const arriveInput = popup.querySelector(".booking-icon-arrive");
const departureInput = popup.querySelector("[name=departure-date]");
const adultCountInput = popup.querySelector("[name=mature-count]");
const childrenCountInput = popup.querySelector("[name=children-count]");

let isStorageSupport = true;
let adult = "";
let children = "";

try {
  adult = localStorage.getItem("adultCount");
  children = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("modal--show")) {
    popup.classList.add("modal--show");
    popup.classList.remove("modal--close");
    form.classList.remove("form--close");
  } else {
    popup.classList.remove("modal--show");
    popup.classList.add("modal--close");
    form.classList.add("form--close");
  }
  if (adult && children) {
    adultCountInput.value = adult;
    childrenCountInput.value = children;
    childrenCountInput.focus();
  } else {
    adultCountInput.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (popup.classList.contains("modal--show")) {
    if (evt.keyCode === 27) {
      popup.classList.remove("modal--show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!adultCountInput.value || !arriveInput.value) {
    evt.preventDefault();
    console.log(
      "Пожалуйста заполните все необходимые поля: дата вылета и одбытия(если требуется), количетсво взрослых и детей(если детей не будет напишите 0)"
    );
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultCount", adultCountInput.value);
      localStorage.setItem("childrenCount", childrenCountInput.value);
    }
  }
});

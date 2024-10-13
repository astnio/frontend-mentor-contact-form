const inputsText = document.querySelectorAll('input[type="text"');
const inputEmail = document.querySelector('input[type="email"');
const inputRadio = document.querySelector('input[type="radio"]');
const inputTextarea = document.querySelector('textarea');
const inputCheckbox = document.querySelector('input[type="checkbox"]');
const btnSubmit = document.getElementById('btn-contact-form-submit');

function isInputValid(inputElement) {
  return inputElement.validity.valid;
}

function setInvalidMessageActive(inputElement, inputErrorWrapper) {
  if (!isInputValid(inputElement)) {
    inputErrorWrapper.dataset.active = true;
  } else {
    inputErrorWrapper.dataset.active = false;
  }
}

function handleInvalidText(inputElement) {
  const inputErrorWrapper = inputElement.parentElement.querySelector(
    '.input-error-wrapper'
  );

  setInvalidMessageActive(inputElement, inputErrorWrapper);
}

function handleInvalidRadio(inputElement) {
  const inputErrorWrapper =
    inputElement.parentElement.parentElement.parentElement.querySelector(
      '.input-error-wrapper'
    );

  setInvalidMessageActive(inputElement, inputErrorWrapper);
}

function handleInvalidCheckbox(inputElement) {
  const inputErrorWrapper =
    inputElement.parentElement.parentElement.querySelector(
      '.input-error-wrapper'
    );

  setInvalidMessageActive(inputElement, inputErrorWrapper);
}

function checkAllInputsValidity() {
  inputsText.forEach((inputElement) => {
    handleInvalidText(inputElement);
  });
  handleInvalidText(inputEmail);
  handleInvalidRadio(inputRadio);
  handleInvalidText(inputTextarea);
  handleInvalidCheckbox(inputCheckbox);
}

function initInputEventListeners() {
  inputsText.forEach((inputElement) => {
    inputElement.addEventListener('blur', () => {
      handleInvalidText(inputElement);
    });
  });

  inputEmail.addEventListener('blur', () => handleInvalidText(inputEmail));

  inputRadio.addEventListener('blur', () => handleInvalidRadio(inputRadio));

  inputTextarea.addEventListener('blur', () => {
    handleInvalidText(inputTextarea);
  });

  inputCheckbox.addEventListener('blur', () =>
    handleInvalidCheckbox(inputCheckbox)
  );

  btnSubmit.addEventListener('click', checkAllInputsValidity);
}

initInputEventListeners();

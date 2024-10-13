const inputs = document.querySelectorAll('input');
const textareaInput = document.querySelector('textarea');
const btnSubmit = document.getElementById('btn-contact-form-submit');

function isInputValid(inputElement) {
  return inputElement.validity.valid === false;
}

function handleInvalidInput(inputElement) {
  let inputErrorWrapper = inputElement.parentElement.querySelector(
    '.input-error-wrapper'
  );

  if (!inputErrorWrapper) {
    inputErrorWrapper = inputElement.parentElement.parentElement.querySelector(
      '.input-error-wrapper'
    );
  }

  if (isInputValid(inputElement)) {
    inputErrorWrapper.dataset.active = true;
  } else {
    inputErrorWrapper.dataset.active = false;
  }
}

function checkAllInputsValidity() {
  inputs.forEach((inputElement) => {
    handleInvalidInput(inputElement);
  });
  handleInvalidInput(textareaInput);
}

inputs.forEach((inputElement) => {
  inputElement.addEventListener('blur', () => {
    handleInvalidInput(inputElement);
  });
});

textareaInput.addEventListener('blur', () => {
  handleInvalidInput(textareaInput);
});

btnSubmit.addEventListener('click', checkAllInputsValidity);

const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const btnSubmit = document.getElementById('btn-contact-form-submit');

function isInputValid(inputElement) {
  return (
    inputElement.validity.valid === false &&
    inputElement.matches(':not(:focus):not(:placeholder-shown)')
  );
}

function handleInvalidInput(inputElement) {
  const inputErrorWrapper = inputElement.parentElement.querySelector(
    '.input-error-wrapper'
  );
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
  handleInvalidInput(textarea);
}

inputs.forEach((inputElement) => {
  console.log(inputElement);
  inputElement.addEventListener('blur', () => {
    handleInvalidInput(inputElement);
  });
});

textarea.addEventListener('blue', () => {
  handleInvalidInput(textarea);
});

btnSubmit.addEventListener('click', checkAllInputsValidity);

// buttons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const paragraph = e.target.parentElement.querySelector(
//       '.card-paragraph-wrapper'
//     );
//     const images = e.target.parentElement.querySelectorAll('img');

//     images.forEach((img) => {
//       let imgActive = img.dataset.active === 'true';
//       img.dataset.active = (!imgActive).toString();
//     });

//     let active = paragraph.dataset.active === 'true';
//     paragraph.dataset.active = (!active).toString();
//   });
// });

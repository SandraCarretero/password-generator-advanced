import { buttonElement, passwordElement, passwordLengthElement, rangeElement } from "./dom";

const PASSWORD_OPTIONS = {
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnñopqrstuvwxyzz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+{}[]<>',
  passwordLength: rangeElement.value
};

let alowedCharacters = '';
let finalPassword = '';

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * alowedCharacters.length);
  return randomNumber;
};

const changeLengthText = () => {
  passwordLengthElement.textContent = `${PASSWORD_OPTIONS.passwordLength}`;
};

const updatePasswordLength = event => {
  PASSWORD_OPTIONS.passwordLength = event.target.value;
  changeLengthText();
};

const printFinalPassword = () => {
  passwordElement.value = finalPassword;
};

const generatePassword = () => {
  finalPassword = '';
  for (let index = 0; index < PASSWORD_OPTIONS.passwordLength; index++) {
    const randomPosition = generateRandomNumber();
    finalPassword += alowedCharacters.charAt(randomPosition);
  }
  printFinalPassword();
};

const disabledButton = isDisabled => {
  buttonElement.disabled = isDisabled;
};

const getCheckedOptions = () => {
  let isDisabled = true;
  alowedCharacters = '';

  const allCheckboxes = document.querySelectorAll('.include-input:checked');

  allCheckboxes.forEach(input => {
    const optionId = input.id;
    alowedCharacters += PASSWORD_OPTIONS[optionId];
    isDisabled = false;
  });

  disabledButton(isDisabled);
};

changeLengthText();

export {updatePasswordLength, generatePassword, getCheckedOptions}
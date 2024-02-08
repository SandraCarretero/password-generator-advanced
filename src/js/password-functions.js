import { PASSWORD_OPTIONS } from "./constants";
import { buttonElement, passwordElement, passwordLengthElement, rangeElement } from "./dom";
import { generateRandomNumber } from "./utils";



let alowedCharacters = '';
let finalPassword = '';



const changeLengthText = () => {
  passwordLengthElement.textContent = `${rangeElement.value}`;
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
    const randomPosition = generateRandomNumber(alowedCharacters.length);
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


export {updatePasswordLength, generatePassword, getCheckedOptions, changeLengthText}
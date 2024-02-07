import { buttonElement, optionsElement, rangeElement } from "./dom";
import { generatePassword, getCheckedOptions, updatePasswordLength } from "./functions";


// Eventos
rangeElement.addEventListener('input', updatePasswordLength);
buttonElement.addEventListener('click', generatePassword);
optionsElement.addEventListener('change', getCheckedOptions);

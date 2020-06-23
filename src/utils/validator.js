import { errorMessages, emailRegex } from '../utils/initialData';

function checkForUppercaseLetter(password) {
  return [...password].some( (item) => item === item.toUpperCase());
}

export function validateEmail(email) {
  if(email.length < 6) {
    return errorMessages['SHORT_EMAIL'];
  }
  else if(!(emailRegex.test(email))) {
    return errorMessages['INVALID_EMAIL']
  }
}

export function validatePassword(password){
  if(password && password.length < 6) {
    return errorMessages['SHORT_PASSWORD'];
  }
  else if(!checkForUppercaseLetter(password)) {
    return errorMessages['INVALID_PASSWORD']
  }
}
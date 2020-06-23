export const errorMessages = {
  REQUIRED: 'This is a required field',
  INVALID_EMAIL: 'Email is Invalid',
  INVALID_PASSWORD: 'Passowrd should contain atleast 1 uppercase letter',
  SHORT_EMAIL: 'Email should be more than 5 characters long',
  SHORT_PASSWORD: 'Password should contain minimum 6 character',
  NO_ERROR: '',
}

export const initialData = {
  email: {
    value: '',
    error: errorMessages['REQUIRED'],
  },
  password: {
    value: '',
    error: errorMessages['REQUIRED'],
  },
}

export const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

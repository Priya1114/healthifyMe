import { validateEmail, validatePassword } from '../utils/validator';
import { errorMessages } from '../utils/initialData';

describe('Validate Fields', () => {

  describe('Email Id', () => {
    test('should contain more than 5 characters', () => {
      let email = 'priya';
      expect(validateEmail(email)).toEqual(errorMessages['SHORT_EMAIL']);
    });

    test('should be a valid Email', () => {
      let email = 'priya@';
      expect(validateEmail(email)).toEqual(errorMessages['INVALID_EMAIL']);
    });
  });

  describe('Password', () => {
    test('should contain more than 5 characters', () => {
      let password = 'pass1';
      expect(validatePassword(password)).toEqual(errorMessages['SHORT_PASSWORD']);
    });

    test('should contain a Uppercase letter', () => {
      let password = 'password';
      expect(validatePassword(password)).toEqual(errorMessages['INVALID_PASSWORD']);
    });
  });

});
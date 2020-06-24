import React, { useState } from 'react';

import InputField from '../common/InputField';
import { initialData, errorMessages } from '../../utils/initialData';
import { validateEmail, validatePassword } from '../../utils/validator';

function Form(props) {
  let [formData, handleFormDataChange] = useState(initialData);
  const disableBtn = (!formData.email.value || !formData.password.value );

  function onInputChange (event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    handleFormDataChange({
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        value: fieldValue,
        error: !fieldValue ? errorMessages['REQUIRED'] : '',
      }
    });
  }

  function onFormSubmit (event) {
    event.preventDefault();

    const emailError = validateEmail(formData.email.value);
    const passswordError = validatePassword(formData.password.value);

      handleFormDataChange({
        ...formData,
        email: {
          ...formData.email,
          error: emailError ? emailError : '',
        },
        password: {
          ...formData.password,
          error: passswordError ? passswordError : '',
        }
      });

      if (!emailError && !passswordError) {
        props.handleFormSubmit();
      }

  }

  return (
    <div>
      <div>
        <p className="heading">Sign in</p>
        <p className="sub-heading">Use your Healthifyme Account</p>
      </div>
      <form onSubmit={onFormSubmit}>
        <InputField
          name="email"
          type="text"
          data={formData.email}
          placeholder='Enter Your Email'
          handleInputChange={onInputChange}
        />
        <InputField
          name="password"
          type="password"
          data={formData.password}
          placeholder='Enter Your Password'
          handleInputChange={onInputChange}
        />
        {
          props.response.status === 'fetching' ?
          <div class="loader center">
            <i class="fa fa-spinner fa-spin"></i> Loading
          </div> :
          <button
            className="login-btn"
            type="submit"
            disabled={disableBtn}
          >
            Login
          </button>
        }
      </form>
    </div>
  )
}
export default Form;

import React, { useState } from 'react';

import Logo from './Logo';
import InputField from './InputField';
import { initialData } from '../utils/initialData';

const SignInForm = () => {
  let [formData, handleFormDataChange] = useState(initialData);

  return (
    <div className="card center">
      <div>
        <div className="center">
          <Logo className="large" />
        </div>
        <div>
          <p className="heading">Sign in</p>
          <p className="sub-heading">Use your Healthifyme Account</p>
        </div>
        <form>
          <InputField
            name="email"
            data={formData.email}
            placeholder='Enter Your Email'
            handleInputChange={handleFormDataChange}
          />
          <InputField
            name="password"
            data={formData.password}
            placeholder='Enter Your Password'
            handleInputChange={handleFormDataChange}
          />
          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignInForm;

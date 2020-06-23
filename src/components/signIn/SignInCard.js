import React, { useState } from 'react';

import Logo from '../common/Logo';
import Form from './Form';
import SuccessBlock from './SuccessBlock';
import { responseData } from '../../utils/initialData';

const SignInCard = () => {
let [response, handleApiResponse] = useState(responseData);

function handleFormSubmit () {

  handleApiResponse({
    ...response,
    status: 'fetching',
  });

  fetch('http://www.mocky.io/v2/5d9d9219310000153650e30b')
  .then(res => res.json())
  .then(res => {
    handleApiResponse({
      ...response,
      status: res.result,
    });
  })
  .catch(error => {
    handleApiResponse({
      ...response,
      status: 'Failed',
    });
    alert(error);
  });
}

  return (
    <div className="card center">
      <div>
        <div className="center">
          <Logo className="large" />
        </div>
        {
          response.status === 'success' ?
          <SuccessBlock /> :
          <Form
            response={response}
            handleFormSubmit={handleFormSubmit}
          />
        }
      </div>
    </div>
  )
}

export default SignInCard;

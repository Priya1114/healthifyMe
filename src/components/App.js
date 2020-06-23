import React from 'react';

import Header from './Header';
import SignInForm from './SignInForm';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="content center">
        <SignInForm />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import Header from './common/Header';
import SignInCard from './signIn/SignInCard';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="content center">
        <SignInCard />
      </div>
    </div>
  );
}

export default App;

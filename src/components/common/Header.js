import React from 'react';

import Logo from './Logo';

function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div className="divider" />
      <div className="header-text">
        Accounts
      </div>
    </div>
  )
}

export default Header;
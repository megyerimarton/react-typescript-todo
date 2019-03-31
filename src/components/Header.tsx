import React from 'react';

import './Header.scss';
import logo from '../assets/images/logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

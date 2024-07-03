import React from 'react';
import logo from './assets/sarus-logo.png';

function TopPanel({ onConnect }) {
  return (
    <div className="top-panel">
      <img src={logo} alt="САРУС" className="logo" />
      <h1 className="app-title">САРУС</h1>
      <button className="connect-button" onClick={onConnect}>Подключение</button>
    </div>
  );
}

export default TopPanel;
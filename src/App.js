import React, { useState, useEffect } from 'react';
import TopPanel from './TopPanel';
import Auth from './Auth';
import Directory from './Directory';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [showAuth, setShowAuth] = useState(true);  // Изменено на true

  const handleAuthClose = (success) => {
    if (success) {
      setIsConnected(true);
    }
    setShowAuth(false);
  };

  return (
      <div className="app">
        <TopPanel />
        {isConnected ? (
            <Directory />
        ) : (
            <div className="welcome-message">Пожалуйста, авторизуйтесь</div>
        )}
        {showAuth && <Auth onClose={handleAuthClose} />}
      </div>
  );
}

export default App;
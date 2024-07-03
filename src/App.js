import React, { useState } from 'react';
import TopPanel from './TopPanel';
import Auth from './Auth';
import Directory from './Directory';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleConnect = () => {
    setShowAuth(true);
  };

  const handleAuthClose = (success) => {
    if (success) {
      setIsConnected(true);
    }
    setShowAuth(false);
  };

  return (
      <div className="app">
        <TopPanel onConnect={handleConnect} />
        {isConnected ? (
            <Directory />
        ) : (
            <div className="welcome-message">Пожалуйста, подключитесь к серверу</div>
        )}
        {showAuth && <Auth onClose={handleAuthClose} />}
      </div>
  );
}

export default App;
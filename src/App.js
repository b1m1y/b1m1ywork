import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPanel from './TopPanel';
import MainMenu from './MainMenu';
import CollaborationWork from './CollaborationWork';
import UnderDevelopment from './UnderDevelopment';
import './App.css';

function App() {
    const [serverName, setServerName] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [showDirectory, setShowDirectory] = useState(false);

    return (
        <Router>
            <div className="app">
                <TopPanel serverName={serverName} />
                <MainMenu serverName={serverName} />
                <div className="content-area">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <CollaborationWork
                                    onServerSelect={setServerName}
                                    isConnected={isConnected}
                                    setIsConnected={setIsConnected}
                                    showDirectory={showDirectory}
                                    setShowDirectory={setShowDirectory}
                                />
                            }
                        />
                        <Route path="/under-development" element={<UnderDevelopment />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
import React from 'react';
import { FaPlug, FaUnlink } from 'react-icons/fa';

function ConnectionButton({ isConnected, setIsConnected, onConnect, onDisconnect }) {
    const handleConnection = () => {
        if (!isConnected) {
            onConnect();
        } else {
            setIsConnected(false);
            onDisconnect();
        }
    };

    return (
        <button
            className={`submenu-button ${isConnected ? 'connected' : ''}`}
            onClick={handleConnection}
        >
            {isConnected ? <><FaUnlink /> Отключиться</> : <><FaPlug /> Подключение</>}
        </button>
    );
}

export default ConnectionButton;
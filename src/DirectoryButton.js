import React from 'react';
import { FaFolder } from 'react-icons/fa';

function DirectoryButton({ isConnected, showDirectory, setShowDirectory }) {
    const handleDirectoryClick = () => {
        if (isConnected) {
            setShowDirectory(!showDirectory);
        }
    };

    return (
        <button
            className={`submenu-button ${!isConnected ? 'disabled' : ''}`}
            onClick={handleDirectoryClick}
            disabled={!isConnected}
        >
            <FaFolder /> Справочники
        </button>
    );
}

export default DirectoryButton;
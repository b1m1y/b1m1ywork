import React, { useState } from 'react';
import { FaDatabase, FaFolder, FaArchive, FaCogs, FaSearch, FaTrash, FaBriefcase, FaKey, FaFileAlt, FaEnvelope, FaUserCog, FaCubes } from 'react-icons/fa';
import ConnectionButton from './ConnectionButton';
import DirectoryButton from './DirectoryButton';
import Auth from './Auth';
import Directory from './Directory';

function CollaborationWork({ onServerSelect, isConnected, setIsConnected, showDirectory, setShowDirectory }) {
    const [showAuth, setShowAuth] = useState(false);

    const handleButtonClick = (message) => {
        alert(message);
    };

    const handleAuthClose = (server) => {
        if (server) {
            setIsConnected(true);
            onServerSelect(server);
        }
        setShowAuth(false);
    };

    const handleDisconnect = () => {
        setIsConnected(false);
        setShowDirectory(false);
        onServerSelect('');
    };

    return (
        <div className="collaboration-work">
            <div className="submenu">
                <div className="submenu-group">
                    <h3>Данные</h3>
                    <ConnectionButton
                        isConnected={isConnected}
                        setIsConnected={setIsConnected}
                        onConnect={() => setShowAuth(true)}
                        onDisconnect={handleDisconnect}
                    />
                    <DirectoryButton
                        isConnected={isConnected}
                        showDirectory={showDirectory}
                        setShowDirectory={setShowDirectory}
                    />
                    <button className="submenu-button disabled"><FaArchive /> Модуль архив</button>
                </div>
                <div className="submenu-group">
                    <h3>Инструменты</h3>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaCogs /> Управление подключениями</button>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaSearch /> Поиск объектов</button>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaTrash /> Корзина</button>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaBriefcase /> Объекты в работе</button>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaKey /> Изменить пароль</button>
                </div>
                <div className="submenu-group">
                    <h3>Справочники</h3>
                    <button className={`submenu-button ${!isConnected ? 'disabled' : ''}`} onClick={() => handleButtonClick("Раздел в разработке")} disabled={!isConnected}><FaDatabase /> ПТЭСИ</button>
                    <button className={`submenu-button ${!isConnected ? 'disabled' : ''}`} onClick={() => handleButtonClick("Раздел в разработке")} disabled={!isConnected}><FaFileAlt /> Файлы</button>
                    <button className={`submenu-button ${!isConnected ? 'disabled' : ''}`} onClick={() => handleButtonClick("Раздел в разработке")} disabled={!isConnected}><FaEnvelope /> Почта и задания</button>
                </div>
                <div className="submenu-group">
                    <h3>Управление</h3>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaUserCog /> Администрирование</button>
                </div>
                <div className="submenu-group">
                    <h3>MDM</h3>
                    <button className="submenu-button" onClick={() => handleButtonClick("Раздел в разработке")}><FaCubes /> СУОД</button>
                </div>
            </div>
            {showDirectory && isConnected && (
                <div className="directory-container">
                    <Directory onServerSelect={onServerSelect} />
                </div>
            )}
            {showAuth && <Auth onClose={handleAuthClose} onServerSelect={onServerSelect} />}
        </div>
    );
}

export default CollaborationWork;
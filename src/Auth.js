import React, { useState } from 'react';
import './Auth.css';

function Auth({ onClose, onServerSelect }) {
    const [server, setServer] = useState('');
    const [authMethod, setAuthMethod] = useState('Системы');
    const [login, setLogin] = useState('Администратор');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        if (server) {
            onServerSelect(server);
            onClose(server);
        } else {
            alert('Пожалуйста, выберите сервер');
        }
    };

    return (
        <div className="auth-container">
            <h2>Авторизация</h2>
            <div className="auth-row">
                <label>Имя сервера:</label>
                <select value={server} onChange={(e) => setServer(e.target.value)}>
                    <option value="">Выберите сервер</option>
                    <option value="Сервер 1">Сервер 1</option>
                    <option value="Сервер 2">Сервер 2</option>
                    <option value="Сервер 3">Сервер 3</option>
                </select>
            </div>
            <div className="auth-row">
                <label>Авторизация:</label>
                <select value={authMethod} onChange={(e) => setAuthMethod(e.target.value)}>
                    <option value="Системы">Системы</option>
                    <option value="Домен">Домен</option>
                </select>
            </div>
            <div className="auth-row">
                <label>Логин:</label>
                <select value={login} onChange={(e) => setLogin(e.target.value)}>
                    <option value="Администратор">Администратор</option>
                    <option value="Сотрудник">Сотрудник</option>
                </select>
            </div>
            <div className="auth-row">
                <label>Пароль:</label>
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        onMouseLeave={() => setShowPassword(false)}
                        className="password-toggle"
                    >
                        {showPassword ? '🙆' : '🙅'}
                    </button>
                </div>
            </div>
            <div className="auth-row remember-me">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label>Запомнить меня</label>
            </div>
            <div className="auth-row">
                <a href="#">Забыть меня</a>
            </div>
            <div className="auth-row auth-buttons">
                <button onClick={handleLogin}>Подключение</button>
                <button onClick={() => onClose()}>Отмена</button>
            </div>
        </div>
    );
}

export default Auth;
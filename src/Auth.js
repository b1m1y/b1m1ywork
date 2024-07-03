import React, { useState } from 'react';
import './Auth.css';

function Auth({ onClose }) {
    const [server, setServer] = useState('');
    const [authMethod, setAuthMethod] = useState('Системы');
    const [login, setLogin] = useState('Администратор');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const servers = [
        { name: 'Сервер 1', ip: '125.0.0.1:35000' },
        { name: 'Сервер 2', ip: '125.0.0.2:35000' },
        { name: 'Сервер 3', ip: '125.0.0.3:35000' },
    ];

    const handleLogin = () => {
        if (server) {
            onClose(true);
        } else {
            alert('Пожалуйста, выберите сервер');
        }
    };

    return (
        <div className="auth-modal">
            <h2>Авторизация</h2>
            <div className="auth-form">
                <div className="auth-row">
                    <label>Имя сервера:</label>
                    <select value={server} onChange={(e) => setServer(e.target.value)}>
                        <option value="">Выберите сервер</option>
                        {servers.map((s) => (
                            <option key={s.ip} value={s.ip}>{s.name}</option>
                        ))}
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
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Запомнить меня
                    </label>
                </div>
                <div className="auth-row">
                    <a href="#" className="forget-me">Забыть меня</a>
                </div>
                <div className="auth-buttons">
                    <button onClick={handleLogin}>Подключение</button>
                    <button onClick={() => onClose(false)}>Отмена</button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
import React, { useState } from 'react';
import './Auth.css';
import CryptoJS from 'crypto-js';

function Auth({ onClose }) {
    const [server, setServer] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async () => {
        if (!server) {
            alert('Пожалуйста, введите адрес сервера');
            return;
        }
        try {
            const response = await authenticate(login, password);
            if (response.ok) {
                //alert(response);
                onClose(true);
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Ошибка при аутентификации:', error);
            alert('Произошла ошибка при попытке подключения: ' + error.message);
        }
    };

    const authenticate = async (username, password) => {
        const url = `http://${server}/v1/user/auth`;
        const hashedPassword = CryptoJS.MD5(password).toString();
        console.log('Отправка запроса на:', url);
        console.log('С данными:', { username });
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                "Connection": "Close",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Login: username,
                Password: hashedPassword,
                Version: '',
                MACAddress: '',
                Authentication: 0,
                FQDN: '',
                Hostname: '',
                ClientType: 0,
                AppInstanceID: ''
            })
        });
        return res;
    };

    return (
        <div className="auth-modal">
            <h2>Авторизация</h2>
            <div className="auth-form">
                <div className="auth-row">
                    <label>Адрес сервера:</label>
                    <input
                        type="text"
                        value={server}
                        onChange={(e) => setServer(e.target.value)}
                        placeholder="Введите адрес сервера"
                    />
                </div>
                <div className="auth-row">
                    <label>Логин:</label>
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Введите логин"
                    />
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
                    <button onClick={handleLogin}>Подключение САРУС</button>
                    <button onClick={() => onClose(false)}>Отмена</button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
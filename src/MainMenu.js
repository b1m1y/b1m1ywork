import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu({ serverName }) {
    return (
        <div className="main-menu">
            <Link to="/under-development" className="menu-item">Файл</Link>
            <Link to="/under-development" className="menu-item">Модель</Link>
            <Link to="/under-development" className="menu-item">Чертеж</Link>
            <Link to="/under-development" className="menu-item">Сборка</Link>
            <Link to="/under-development" className="menu-item">Параметры</Link>
            <Link to="/under-development" className="menu-item">Анализ</Link>
            <Link to="/under-development" className="menu-item">ЧПУ</Link>
            <Link to="/" className="menu-item">Совместная работа</Link>
            <Link to="/under-development" className="menu-item">Технология</Link>
            <Link to="/under-development" className="menu-item">СУД</Link>
            <Link to="/under-development" className="menu-item">Архив</Link>
            <Link to="/under-development" className="menu-item">Визуализация</Link>
            <Link to="/under-development" className="menu-item">ИЛП</Link>
            <Link to="/under-development" className="menu-item">ИЛП.ЛСИ</Link>
            <div className="server-name">{serverName}</div>
        </div>
    );
}

export default MainMenu;
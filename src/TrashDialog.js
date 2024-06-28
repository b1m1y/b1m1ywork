import React from 'react';

function TrashDialog({ onClose }) {
    return (
        <div className="modal">
            <h2>Корзина</h2>
            <div className="modal-content">
                <p>Корзина пуста</p>
                {/* Здесь можно добавить список удаленных элементов */}
            </div>
            <div className="modal-buttons">
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default TrashDialog;
import React from 'react';

function ActionList({ type, onClose }) {
    const actions = type === 'undo'
        ? ['Отменить действие 1', 'Отменить действие 2', 'Отменить действие 3']
        : ['Повторить действие 1', 'Повторить действие 2', 'Повторить действие 3'];

    return (
        <div className="action-list">
            {actions.map((action, index) => (
                <div key={index} className="action-item" onClick={onClose}>{action}</div>
            ))}
        </div>
    );
}

export default ActionList;
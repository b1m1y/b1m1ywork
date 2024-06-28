import React, { useState } from 'react';

function SaveDialog({ onClose }) {
    const [fileName, setFileName] = useState('');
    const [fileExtension, setFileExtension] = useState('.json');

    const handleSave = () => {
        if (!fileName) {
            alert('Пожалуйста, введите имя файла');
            return;
        }

        // Создаем dummy-данные для демонстрации
        const data = JSON.stringify({ dummyData: 'This is a test file' });

        // Создаем Blob из данных
        const blob = new Blob([data], { type: 'application/octet-stream' });

        // Создаем URL для Blob
        const url = URL.createObjectURL(blob);

        // Создаем временный элемент <a> для скачивания
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}${fileExtension}`;

        // Программно кликаем по ссылке для начала скачивания
        document.body.appendChild(link);
        link.click();

        // Удаляем временный элемент
        document.body.removeChild(link);

        // Освобождаем URL
        URL.revokeObjectURL(url);

        onClose();
    };

    return (
        <div className="modal">
            <h2>Сохранить</h2>
            <div className="modal-content">
                <label htmlFor="fileName">Имя файла:</label>
                <input
                    type="text"
                    id="fileName"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="Введите имя файла"
                />
                <label htmlFor="fileExtension">Расширение файла:</label>
                <select
                    id="fileExtension"
                    value={fileExtension}
                    onChange={(e) => setFileExtension(e.target.value)}
                >
                    <option value=".json">.json</option>
                    <option value=".txt">.txt</option>
                    <option value=".xml">.xml</option>
                    <option value=".csv">.csv</option>
                </select>
            </div>
            <div className="modal-buttons">
                <button onClick={onClose}>Отмена</button>
                <button onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
}

export default SaveDialog;
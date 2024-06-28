import React, { useState } from 'react';

const initialFilters = {
    showDocuments: true,
    showClassifiers: true,
    showSystemReferences: true,
    customFilter: ''
};

const FilterModal = ({ onApply, onClose, onReset }) => {
    const [filters, setFilters] = useState(initialFilters);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleApply = () => {
        onApply(Object.entries(filters).filter(([_, value]) => value).map(([key]) => key));
    };

    const handleReset = () => {
        setFilters(initialFilters);
        onReset();
    };

    return (
        <div className="filter-modal">
            <h2>Фильтрация справочников</h2>
            <div className="filter-option">
                <input
                    type="checkbox"
                    id="showDocuments"
                    name="showDocuments"
                    checked={filters.showDocuments}
                    onChange={handleChange}
                />
                <label htmlFor="showDocuments">Показывать документы</label>
            </div>
            <div className="filter-option">
                <input
                    type="checkbox"
                    id="showClassifiers"
                    name="showClassifiers"
                    checked={filters.showClassifiers}
                    onChange={handleChange}
                />
                <label htmlFor="showClassifiers">Показывать классификаторы</label>
            </div>
            <div className="filter-option">
                <input
                    type="checkbox"
                    id="showSystemReferences"
                    name="showSystemReferences"
                    checked={filters.showSystemReferences}
                    onChange={handleChange}
                />
                <label htmlFor="showSystemReferences">Показывать системные справочники</label>
            </div>
            <div className="filter-option">
                <input
                    type="text"
                    id="customFilter"
                    name="customFilter"
                    value={filters.customFilter}
                    onChange={handleChange}
                    placeholder="Пользовательский фильтр"
                />
            </div>
            <div className="filter-buttons">
                <button onClick={onClose}>Отмена</button>
                <button onClick={handleApply}>Применить</button>
                <button onClick={handleReset}>Сбросить</button>
            </div>
        </div>
    );
};

export default FilterModal;
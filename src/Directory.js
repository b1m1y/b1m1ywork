import React, { useState, useEffect } from 'react';
import TreeView from './TreeView';
import { FaSearch, FaFilter, FaServer, FaSync } from 'react-icons/fa';
import Auth from './Auth';
import FilterModal from './FilterModal';
import './Directory.css';

const Directory = ({ onServerSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAuth, setShowAuth] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);
    const [directories, setDirectories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchDirectories();
    }, []);

    const fetchDirectories = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/directories');
            const data = await response.json();
            setDirectories(data);
        } catch (error) {
            console.error('Ошибка при загрузке справочников:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = () => {
        setShowFilterModal(true);
    };

    const handleChangeServer = () => {
        setShowAuth(true);
    };

    const handleRefresh = async () => {
        await fetchDirectories();
        console.log('Справочники обновлены');
    };

    const handleAuthClose = (server) => {
        if (server) {
            onServerSelect(server);
        }
        setShowAuth(false);
    };

    const handleFilterApply = (filters) => {
        setActiveFilters(filters);
        setShowFilterModal(false);
    };

    const handleFilterReset = () => {
        setActiveFilters([]);
        setShowFilterModal(false);
    };

    return (
        <div className="directory">
            <div className="directory-controls">
                <div className="directory-search">
                    <input
                        type="text"
                        placeholder="Поиск по справочникам"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <FaSearch />
                </div>
                <div className="directory-buttons">
                    <button onClick={handleFilter}><FaFilter /> Фильтр</button>
                    <button onClick={handleChangeServer}><FaServer /> Сервер</button>
                    <button onClick={handleRefresh} disabled={isLoading}>
                        <FaSync /> {isLoading ? 'Обновление...' : 'Обновить'}
                    </button>
                </div>
            </div>
            <div className="directory-tree-container">
                {isLoading ? (
                    <div>Загрузка справочников...</div>
                ) : (
                    <TreeView
                        data={directories}
                        searchTerm={searchTerm}
                        activeFilters={activeFilters}
                    />
                )}
            </div>
            {showAuth && <Auth onClose={handleAuthClose} onServerSelect={onServerSelect} />}
            {showFilterModal && (
                <FilterModal
                    onApply={handleFilterApply}
                    onClose={() => setShowFilterModal(false)}
                    onReset={handleFilterReset}
                />
            )}
        </div>
    );
};

export default Directory;
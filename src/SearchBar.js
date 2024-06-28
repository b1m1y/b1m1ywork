import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsExpanded(false);
                setSearchText('');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        // Здесь будет логика поиска
        console.log('Поиск:', searchText);
    };

    return (
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`} ref={searchRef}>
            {isExpanded && (
                <input
                    type="text"
                    placeholder="Поиск функционала"
                    onChange={handleChange}
                    value={searchText}
                    autoFocus
                />
            )}
            <button onClick={isExpanded ? handleSearch : handleFocus}>
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBar;
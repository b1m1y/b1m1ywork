import React, { useState } from 'react';
import { FaFolder, FaFile, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const TreeNode = ({ node, searchTerm, activeFilters }) => {
    const [expanded, setExpanded] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    const filterNode = (node, term, filters) => {
        const matchesSearch = node.title.toLowerCase().includes(term.toLowerCase());
        const matchesFilters = filters.length === 0 ||
            (filters.includes('showDocuments') && node.title.includes('Документы')) ||
            (filters.includes('showClassifiers') && node.title.includes('Классификаторы')) ||
            (filters.includes('showSystemReferences') && node.title.includes('Системные справочники')) ||
            (filters.includes('customFilter') && node.title.toLowerCase().includes(filters.find(f => f.startsWith('customFilter'))?.split(':')[1]?.toLowerCase() || ''));

        return matchesSearch && matchesFilters ||
            (node.children && node.children.some(child => filterNode(child, term, filters)));
    };

    const isVisible = filterNode(node, searchTerm, activeFilters);

    if (!isVisible) {
        return null;
    }

    return (
        <li style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
                {hasChildren ? expanded ? <FaChevronDown /> : <FaChevronRight /> : null}
                {hasChildren ? <FaFolder style={{ marginLeft: '5px' }} /> : <FaFile style={{ marginLeft: '20px' }} />} {node.title}
            </div>
            {hasChildren && expanded && (
                <ul style={{ marginLeft: '20px' }}>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} searchTerm={searchTerm} activeFilters={activeFilters} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;
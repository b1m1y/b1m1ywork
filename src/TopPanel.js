import React, { useState } from 'react';
import { FaSave, FaUndo, FaRedo, FaList, FaTrash, FaSearch } from 'react-icons/fa';
import logo from './assets/sarus-logo.png';
import SaveDialog from './SaveDialog';
import TrashDialog from './TrashDialog';
import ActionList from './ActionList';
import SearchBar from './SearchBar';

function TopPanel() {
    const [openDialog, setOpenDialog] = useState(null);

    const handleDialogOpen = (dialogName) => {
        setOpenDialog(openDialog === dialogName ? null : dialogName);
    };

    const handleDialogClose = () => {
        setOpenDialog(null);
    };

    return (
        <div className="top-panel">
            <img src={logo} alt="САРУС" className="logo" />
            <div className="action-buttons">
                <button className="action-button" onClick={() => handleDialogOpen('save')} title="Сохранить">
                    <FaSave />
                </button>
                <button className="action-button" onClick={() => {}} title="Отменить">
                    <FaUndo />
                </button>
                <div className="action-button-container">
                    <button className="action-button" onClick={() => handleDialogOpen('undoList')} title="Список отменяемых действий">
                        <FaList />
                    </button>
                    {openDialog === 'undoList' && <ActionList type="undo" onClose={handleDialogClose} />}
                </div>
                <button className="action-button" onClick={() => {}} title="Повторить">
                    <FaRedo />
                </button>
                <div className="action-button-container">
                    <button className="action-button" onClick={() => handleDialogOpen('redoList')} title="Список восстанавливаемых действий">
                        <FaList />
                    </button>
                    {openDialog === 'redoList' && <ActionList type="redo" onClose={handleDialogClose} />}
                </div>
                <SearchBar />
                <button className="action-button" onClick={() => handleDialogOpen('trash')} title="Корзина">
                    <FaTrash />
                </button>
            </div>
            <h1 className="app-title">САРУС</h1>
            {openDialog === 'save' && <SaveDialog onClose={handleDialogClose} />}
            {openDialog === 'trash' && <TrashDialog onClose={handleDialogClose} />}
        </div>
    );
}

export default TopPanel;
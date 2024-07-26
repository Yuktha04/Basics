// src/Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('None');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="drop-btn">
                Select an option
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <button onClick={() => selectOption('Option 1')}>Option 1</button>
                    <button onClick={() => selectOption('Option 2')}>Option 2</button>
                    <button onClick={() => selectOption('Option 3')}>Option 3</button>
                </div>
            )}
            <p>Selected option: {selectedOption}</p>
        </div>
    );
};

export default Dropdown;

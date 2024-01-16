/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Chip from './component/ChipComponent'; // Import Chip component
import Dropdown from './component/Dropdown'; // Import Dropdown component
import { data } from './data/data'; // Import the data array

import "./App.css";

const App = () => {
    const [allItems, setAllItems] = useState(data);
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [keyPress, setKeyPress] = useState(0);
    const [lastSelectedChip, setLastSelectedChip] = useState(null);

    // Function to handle item selection from the dropdown
    const handleSelectItem = (item) => {
        setSelectedItems(prevItems => [...prevItems, item]);
        setAllItems(prevItems => prevItems.filter(i => i !== item));
        setInputValue('');
        setLastSelectedChip(item); // Clear input field after selecting an item
    };

    // Function to remove a selected chip
    const handleRemoveChip = (item) => {
        let lastItem;
        setSelectedItems(prevItems => {
            let prevData = prevItems.filter(i => i !== item);
            lastItem = prevData[prevData.length - 1];
            return prevData;
        });
        setAllItems(prevItems => [...prevItems, item]);
        if (lastItem) {
            setLastSelectedChip(lastItem);
        }
    };

    // Function to handle input change and filter dropdown items
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        if (e.key === 'Backspace' && keyPress < 1) {
            setKeyPress(keyPress + 1);
        } else {
            setKeyPress(0);
        }
        // Highlight the last chip on backspace press
        if (inputValue === '' && keyPress === 1 && e.key === 'Backspace' && selectedItems.length > 0) {
            let item = selectedItems[selectedItems.length - 1];
            setLastSelectedChip(item);
            handleRemoveChip(item);
        } else {
            setLastSelectedChip(null);
        }
    };

    // Filtered items for the dropdown based on input value
    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <>
        <div className='heading'>
            <h1>Pick Users</h1>
        </div>
        <div className='container mx-auto'>
            <div className='flex w-full flex-wrap gap-2'>
                <div className="flex flex-wrap pill-container">
                    {selectedItems.map(item => (
                        <Chip
                            key={item.email}
                            label={item.name}
                            image={item.image_url}
                            onRemove={() => handleRemoveChip(item)}
                            className='bg-blue-500 text-white py-1 px-2 rounded-lg m-1 cursor-pointer'
                        />
                    ))}
                </div>
               
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputChange} // Capture Backspace key press
                        placeholder="Search for people..."
                        className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500'
                    />
                    <Dropdown items={filteredItems} onSelect={handleSelectItem} />
                </div>
            </div>
        </div>
        </>
    );
};

export default App;
import React from 'react';
import "./Dropdown.css"

// Dropdown component with a maximum of 5 items displayed
const Dropdown = ({ items, onSelect }) => {


    return (
        <div className='search-div'>
            <ul>
                {items.map(item => (
                    <li key={item.email} onClick={() => onSelect(item)} className='cursor-pointer'>
                    <div className='flex searchResult'>
                        <div className='img-container'>
                            <img className="img-tag" alt='avatar' src={item.image_url}></img>
                            <span>{item.name}</span>
                        </div>
                        <div className='email-info'><span className='text-gray-500'>{item.email}</span></div>
                    </div>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Dropdown;
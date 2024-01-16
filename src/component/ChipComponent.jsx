import React from 'react';


import "./Chip.css"

const Chip = ({image, label, onRemove }) => {
    return (
        <div>
        <div className="gap-1">
            <div className='image'><img className='img-tag' alt="chip-item" src={image}/></div>
            <span className=''>{label}</span>
            <button onClick={onRemove} className="">X</button>
        </div>
        </div>
    );
};

export default Chip;
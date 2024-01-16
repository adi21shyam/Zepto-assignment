import React from 'react';


const Chip = ({ label, onRemove }) => {
    return (
        <div className="gap-2">
            <span className=''>{label}</span>
            <button onClick={onRemove} className="">X</button>
        </div>
    );
};

export default Chip;
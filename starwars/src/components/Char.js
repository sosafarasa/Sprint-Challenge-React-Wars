import React from 'react';

const Char = props => {
    return (
        <div className={`char-info ${props.char.gender}`}>
            <h2>
                <strong>Name:</strong> {props.char.name}
            </h2>
            <p>
                <strong>Eye Color:</strong> {props.char.eye_color}
            </p>
            <p>
                <strong>Hair Color:</strong> {props.char.hair_color}
            </p>
                
        
        </div>
    );
};

export default Char;
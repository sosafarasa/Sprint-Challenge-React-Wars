import React from 'react';
import "./StarWars.css";

const Char = props => {
    return (
        <div className= "char-card">
            <div className= "char-info">
                <h2> {props.char.name} </h2>
                <p>
                    <strong>Gender:</strong> {props.char.gender}
                </p>
                <p>
                    <strong>Hair Color:</strong> {props.char.hair_color}
                </p>
                <p>
                    <strong>Eye Color:</strong> {props.char.eye_color}
                </p>
            </div>
        </div>
    );
};

export default Char;
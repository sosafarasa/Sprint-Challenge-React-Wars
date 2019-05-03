import React from 'react';
import Char from './Char';

const CharsList = props => {
    return (
        <div className="chars-list">
            {props.starwarsChars.map(item => (
                <Char char={item} key={item.created}/>
            ))};
        </div>
    );
};

export default CharsList;
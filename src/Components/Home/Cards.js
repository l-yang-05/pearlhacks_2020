import React from 'react';

const Cards = ({title, description}) =>{
    return (
        <div className="cards__item">
            <h2>    
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    );
}

export default Cards;
import React from 'react';

const Cards = ({ title, symbol, description }) => {
    return (
        <div className="cards__item">
            {symbol}
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
import React from 'react';


const PortfolioItem = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This is the portfolio item {props.match.params.id}</p>
    </div>
);

export default PortfolioItem;
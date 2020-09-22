import React from 'react';

const PlaceDescription = (props) => {
    const {name, description} = props. description;
    return (
        <div style={{ marginLeft: '10px', textAlign: 'justify', minHeight: '200px'}}>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
    );
};

export default PlaceDescription;
import React from 'react';
import './StayAt.css';

const StayAt = (props) => {
    const { name, guests, beds, baths, details, advantage, price, photoUrl } = props.acco;
    return (
        <div className='stay-at-style'>
            <img src={photoUrl} alt="" />
            <div className='acco-details'>
                <h2>{name}</h2>
                <p>
                    <span>{guests} guests</span>
                    <span>{beds} beds</span>
                    <span>{baths} baths</span>
                </p>
                <p>{details}</p>
                <p>{advantage}</p>
                <h5>{price}</h5>
            </div>
        </div>
    );
};

export default StayAt;
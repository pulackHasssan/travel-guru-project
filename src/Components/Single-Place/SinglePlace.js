import React from 'react';
import './SinglePlace.css';

const SinglePlace = (props) => {
  const  {name, photoUrl} = props.place;
    return (
        <div className='single-place'>
       <button onMouseEnter={() => props.descriptionHandleEvent(props.place)}>
       <img className='place-img' src={photoUrl} alt=""/>
            <h2>{name}</h2>
       </button>
      </div>
    );
};

export default SinglePlace;
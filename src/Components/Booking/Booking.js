import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const history = useHistory()
    const handleAccomodation=() =>{
        history.push('/accomodation')
    }
    return (
        <div className='booking-component'>
            <form action="">
                Origin 
                <br/>
                <input type="text" required/>
                <br/>
                Destination
                <br/>
                <input type="text" required/>
                <br/>
                from
                <input type="date" name="" id="" required/>
                <br/>
                to
                <input type="date" name="" id=""  required/>
                <br/>
                <input type='submit' value='start booking' onClick={handleAccomodation} className='booking-button'/>
            </form>
        </div>
    );
};

export default Booking;
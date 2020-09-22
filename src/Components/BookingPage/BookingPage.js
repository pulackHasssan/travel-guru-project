import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Booking from '../Booking/Booking';

const BookingPage = () => {
    return (
        <div className='home'>
            <Row>
                <Col md={4}>
                    <h2>Book Now!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam expedita sunt, quibusdam facere reprehenderit.</p>
                </Col>
                <Col className='col-style'>
                <Booking></Booking>
                </Col>

            </Row>
        </div>
    );
};

export default BookingPage;
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import places from '../../fakeData/fakePlace';
import SinglePlace from '../Single-Place/SinglePlace';
import './Place.css';
import { Link } from "react-router-dom";
import PlaceDescription from '../PlaceDescription/PlaceDescription';

const Place = () => {
    const [destinations, setDestinations] = useState(places);
    const [description, setDescription] = useState(destinations);

    const descriptionHandleEvent = (destinations) => {
        setDescription(destinations);
    }
    return (
        <Row>
            <Col md={4} className='column-sizing'>
                <PlaceDescription description={description}></PlaceDescription>
                <Link to='/booking'><button className='main-button'>Book Now &rarr;</button></Link>
            </Col>
            <Col className='column-sizing'>
                {
                    destinations.map(place => <SinglePlace key={place.id} place={place} descriptionHandleEvent={descriptionHandleEvent}></SinglePlace>)
                }
            </Col>
        </Row>
    );
};

export default Place;
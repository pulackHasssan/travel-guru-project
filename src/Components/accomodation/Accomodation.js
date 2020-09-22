import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import fakeAccomodation from '../../fakeData/fakeAccomodation';
import StayAt from '../StayAt/StayAt';
import './accomodation.css';
const Accomodation = () => {
    const [stay, setStay] = useState(fakeAccomodation);
    return (
        <Row>
            <Col md={7}>
                {
                    stay.map(acco => <StayAt acco={acco}></StayAt>)
                }
            </Col>
            <Col>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="600" height="700" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Accomodation;
import React, { useContext } from 'react';
import {Form, FormControl, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css';

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
   <div className='navigation'>
         <Navbar bg="" variant="dark">
    <Link to="/"><img className='logo' src="https://i.ibb.co/SKnF2fm/Logo.png" alt="Logo"/> </Link>
    <Form inline>
      <FormControl type="text" placeholder="Search Your Destination" className="search-bar  mr-sm-2" />
    </Form>
    <span style={{color: 'yellow', fontSize:'15px'}}>{loggedInUser.name}</span>
    <Nav className="mr-auto nav-style">
      <Link class="nav-link" to="/">Home</Link>
      <Link class="nav-link" to="/place">Destination</Link>
      <Link class="nav-link" to="/news">News</Link>
      <Link class="nav-link" to="/signin">Sign in</Link>
    </Nav>
   
  </Navbar>
   </div>
    );
};

export default Navigation;
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import {BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Navigation from './Components/Navigation/Navigation';
import Accomodation from './Components/accomodation/Accomodation';
import SignIn from './Components/SignUp/SignIn';
import BookingPage from './Components/BookingPage/BookingPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/"> 
              <Home/>
              </Route>
              <Route path="/booking">
                  <BookingPage></BookingPage>
              </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <PrivateRoute path='/accomodation'>
              <Accomodation/>
            </PrivateRoute>
            <Route path="*">
              <ErrorPage/>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
  );
}

export default App;

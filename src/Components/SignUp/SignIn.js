import React, { useContext, useState } from 'react';

import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, handleSignOut, initializeSignInFrameWork, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleFbSignIn } from './signInManager';
import './SignUp.css';

const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'} };


    //declare usestates
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photoURL: ''
    });
    initializeSignInFrameWork();
//declare providers

    //handle sign in 
    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    const fbSignIn =() =>{
        handleFbSignIn()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    };
    //handle sign out
   const signOut = () =>{
       handleSignOut()
       .then(res=>{
           setUser(res);
           setLoggedInUser(res);
           history.replace(from);
       })
   };

   const handleSubmit =(e)=>{
    if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
    }
    e.preventDefault();
};

    //handle change
    const handleBlur = (e) =>{
        let isFormValid;
        if(e.target.name === 'email'){
            // isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            // isFormValid = e.target.value.length > 6;
        }
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    };





    return (
       <div className='sign-up-style'>
            <div className='form-box'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name='email' placeholder="Email address" required/>
                <br/>
                <input type="password" onBlur={handleBlur} placeholder="Password" name='password' required/>
                <br/>
                <br/>
                <input className='main-button' type="submit" value="Sign in"/>
            </form>
            <br/>
            <p>Need an account?</p> <Link to='/signup'>Sign up now.</Link>
        </div>
        <div className='social-signIn'>
            <button onClick={googleSignIn} className='social-button'>Sign in with google</button>
            <br/>
            <br/>
            <button className='social-button' onClick={fbSignIn}>Sign in with facebook</button>

        </div>
       </div>
    );
};

export default SignIn;
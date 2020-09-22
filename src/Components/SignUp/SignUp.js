import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeSignInFrameWork, signInWithEmailAndPassword } from './signInManager';
import './SignUp.css';

const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'} };


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
    };
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
   }
    //handle change
    const handleBlur = (e) =>{
        let isFormValid;
        if(e.target.name === 'email'){
            // isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            isFormValid = isPasswordValid;
        }
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    };



    //handle submit
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
    }

    return (
        <div className='sign-up-style'>
            <div className='form-box'>
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Full Name" required/>
                <br/>
                <input type="text" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                <br/>
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>
                <br/>
                <br/>
                <br/>
                <input className='main-button' type="submit" value="Sign up"/>
                <br/>
            </form>
            {user.success ? <p>user created successfully</p> : <p style={{color: 'red'}}>{user.error}</p>}
              <p>already have an account?</p> <Link to="/signin">Log in</Link>
        </div>

        <div className='social-signIn'>
            <button className='social-button' onClick={googleSignIn}>Sign in with google</button>
            <br/>
            <br/>
            <button className='social-button' onClick={fbSignIn}>Sign in with facebook</button>

        </div>
        </div>

    );
};

export default SignUp;
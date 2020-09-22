import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeSignInFrameWork =() =>{
   if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
   }

}

export const handleGoogleSignIn = () =>{
    const gProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(gProvider)
    .then(res => {
           const {displayName, photoURL, email} = res.user;
           const signedInUser = {
               isSignedIn: true,
               name: displayName,
               email: email,
               photoURL: photoURL,
               success: true,
           }
           return signedInUser;
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        const credential = err.credential;
      });
      
};


export const handleFbSignIn = () =>{
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider)
  .then(res => {
   const {displayName, email, photoURL} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photoURL: photoURL,
      success: true
    }
    return signedInUser;
  })
  .catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    // ...
  });
  
}




export const handleSignOut = () =>{
   return firebase.auth().signOut()
    .then(res => {
        const signedOutUser ={
            isSignedIn: false,
            name: '',
            email: '',
            photoURL: '',
            error: '',
            success: false
        }
        return signedOutUser;
      })
      .catch(err=> {
      });
      
};
export const createUserWithEmailAndPassword = (name, email, password) =>{
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
        const newUserInfo =res.user;
        newUserInfo.error ='';
        newUserInfo.success =true;
        updateUserName(name);
        return newUserInfo;
    })
    .catch(error=> {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
};

export const signInWithEmailAndPassword =(email, password)=>{
   return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res=>{
        const newUserInfo = res.user;
        newUserInfo.error ='';
        newUserInfo.success =true;
        return newUserInfo;
    })
    .catch(error => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
};


const updateUserName= name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    })
    .then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
}


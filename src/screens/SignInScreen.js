import React, {useRef} from 'react'

import { auth } from '../firebase.js'
import "./SignInScreen.css"
/*import { db } from "./firebase";*/



function SignInScreen() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)




    /*Register user section*/
    const register = (e) => {
            e.preventDefault();/*keeps the button from refreshing*/
            auth
            .createUserWithEmailAndPassword( /* this creates a new user*/ 
                emailRef.current.value, /*go to the emailref, whatever its pointing at, whatever the value it*/ 
                passwordRef.current.value /*these will creat the users email and password once they are typed in*/ 
            )
            
            .then((authUser)=> {
                console.log(authUser);

            }).catch((error) =>{
                alert(error.message);/*displays error message*/ 
            });
    };



      /*Sign in is below*/ 
    const signIn = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error) => alert(error.message));
    };




  return (
    <div className="SignInScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>

            <h4>
                <span className="signupscreengray">
                New to Netfix? 
                </span>
                <span className="signupScreen_link" onClick={register}>
                Sign Up Now.
                </span>
                
                 
            </h4>
            
        </form>

    </div>
  )
}

export default SignInScreen
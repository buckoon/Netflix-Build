import React from 'react'
import "./SignInScreen.css"

function SignInScreen() {
  return (
    <div className="SignInScreen">
        <form>
            <h1>Sign In</h1>
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password"/>
            <button type="submit"> Sign in</button>

            <h4>
                <span className="signupscreengray">
                New to Netfix? 
                </span>
                <span>
                Sign Up Now.
                </span>
                
                 
            </h4>
            
        </form>

    </div>
  )
}

export default SignInScreen
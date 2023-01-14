import React, {useState} from 'react'
import "./Login.css"
import SignInScreen from './SignInScreen';

function Login() {

  const[ signin, setSignin ]=useState(false);

  return (
    <div className="login">
      <div className="loginscreen_background">
        <img
        className="loginscreen_logo"
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>


      </div>


      <button onClick={() => setSignin(true)}  
      
      className="loginscreen_button">
       
          Sign In
      </button>
      <div className="loginscreen_gradient">


      </div>

      <div className="loginscreen_body">
        {signin ? (
          <SignInScreen/>

        ):( 
        
          <>
        <h1>
          Unlimited films
        </h1>

        <h2>Watch anywhere and cancel at anytime</h2>

        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <div className= "loginscreen_input">
          <form>
            <input type="email" placeholder="email"
            />
            <button 
            onClick={() => setSignin(true)}
            className = "getstarted_button">Get Started


            </button>



           

          </form>

        </div>
        </>
        )}
       

      </div>
     
        
        
    </div>
  )
}

export default Login
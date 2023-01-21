import React from 'react'
import "./ProfileScreen.css"
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"
import { auth } from '../firebase';
import PlanScreen from "./PlanScreen";

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen_body">
        <h1> Edit Profile</h1>
        <div className ="profileScreen_info">
          <img src="data:image/jpeg;base64,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" alt=""/>
          <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
                <h3>Plans</h3>

                <PlanScreen />
                <button  onClick={()=>auth.signOut()}/*This will trigger the listener in APP.js, auth.onAuthStateChanged((userAuth) */
                className="profileScreen_signout">
                Sign Out
                </button>
              </div>
          </div>
        
        </div>

      </div>

    </div>
  )
}

export default ProfileScreen
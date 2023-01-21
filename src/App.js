import React, { useEffect } from 'react';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./screens/Login"
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";

import './App.css';

function App() {

  const user =useSelector(selectUser);/*the useSelector hook is used to access the state of the user stored in the Redux store, and the selected state is stored in the "user" variable. This variable is then used to determine if the user is logged in or logged out and to render the appropriate components in the return statement.*/ 
  const dispatch = useDispatch();


  /*This next section combines Firebase Auth and Redux*/ 
  useEffect(()=>{           /*The useEffect will listen to the users logged in state*/
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{     /*This is a listener that listens to any authenticated state change such as the buttons in ProfileScreen Component; userAuth is a a call back function*/ 
      if (userAuth) {/*if the user exists*/ 
        //if the user (userAuth) exists they are Logged in
        dispatch(login({ /*dispatch updates the redux store to logged in if firebase Auth has the below credentials*/ 
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      } else{
        // else then they are logged out
        dispatch(logout());
      }

    });
    
    return unsubscribe;   /*detaching the listener*/
    }, [dispatch] );/*the useEffect is dependent on the dispatch method*/ 






  
  return (
    <div className="app">
      <Router>
        {!user ? ( /*the useSelector hook is used to access the state of the user stored in the Redux store, and the selected state is stored in the "user" variable. This variable is then used to determine if the user is logged in or logged out and to render the appropriate components in the return statement.*/ 
          <Login/>) : (
       
        <Routes>
          <Route  path="/profile" element={<ProfileScreen />}/>
          <Route  path="/" element={<HomeScreen />}/>
        </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./screens/Login"



import './App.css';

function App() {

  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>) : (
       
        <Routes>
          <Route  path="/" element={<HomeScreen />}/>
        </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;

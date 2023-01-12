import React from 'react';
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route  path="/" element={<HomeScreen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

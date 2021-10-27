import logo from '../logo.svg';
import '../App.css';
import React from "react";
//import Header from "./Header";
import AstronomyPage from "./AstronomyPage";
import NewAstronomyForm from './NewAstronomyForm';

console.log(process.env.REACT_APP_NASA_API_KEY)

function App() {
  return (
    <div className="App">
      <AstronomyPage/>
    </div>
  );
}

export default App;

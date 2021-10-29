import '../App.css';
import React from "react";
import AstronomyPage from "./AstronomyPage";
import {Route, Switch} from 'react-router-dom'
import NavBar from './Navbar';
import Daily from './Daily';
import Weekly from './Weekly';

const NASA_BASE_URL= `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=2021-09-01&end_date=2021-09-30`
const MY_URL= 'http://localhost:4000/astronomy'

console.log(process.env.REACT_APP_NASA_API_KEY)



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/Weekly'>
          <Weekly />
        </Route>
        <Route path='/Daily'>
          <Daily />
        </Route>
        <Route exact path='/'>
          <AstronomyPage Url={NASA_BASE_URL} key={"Old Form"}/>
        </Route>
        <Route path='/NewAstronomyForm'>
          <AstronomyPage Url={MY_URL} key={"New Form"}/>
         
        </Route>
      </Switch>
    </div>

  );
}

export default App;

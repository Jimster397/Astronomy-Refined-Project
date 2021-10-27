import React, {useState, useEffect} from 'react';
import AstronomyList from  './AstronomyList';
import NewAstronomyForm from './NewAstronomyForm'
//import Search from 'Search'
const BASE_URL= `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=2021-09-01&end_date=2021-09-30`
function AstronomyPage(){
    useEffect(getAstronomy, [])
    const [astronomy, setAstronomy]= useState([])

    function getAstronomy(){
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(allAstronomy => setAstronomy(allAstronomy))
    }
    return(
        <main>
        <AstronomyList astronomy={astronomy}/>
        <NewAstronomyForm setAstronomy={setAstronomy}/>
        </main>
    )
}
export default AstronomyPage;
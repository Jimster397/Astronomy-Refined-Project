import React, { useState,useEffect} from 'react';
import AstronomyList from  './AstronomyList';
import NewAstronomyForm from './NewAstronomyForm'
import { useHistory } from 'react-router';
function AstronomyPage({Url}){
    const history=useHistory()
    
    useEffect(getAstronomy, [Url])
    const [astronomy, setAstronomy]= useState([])
    function getAstronomy(){
        fetch(Url)
        .then(resp => resp.json())
        .then(allAstronomy => setAstronomy(allAstronomy))
    }
    return(
        <main>
        
        {history.location.pathname ==='/NewAstronomyForm' && <NewAstronomyForm setAstronomy={setAstronomy}/>}
        <AstronomyList astronomy={astronomy}/>
        </main>
    )
}
export default AstronomyPage;
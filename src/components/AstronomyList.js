import React from 'react';
import AstronomyCard from './AstronomyCard';

function AstronomyList({astronomy}){
    const renderAstronomy = astronomy.map(oneAstronomy =><AstronomyCard key={oneAstronomy.date} astronomy={oneAstronomy}/>)
    return(
        <ul className='cards'>{renderAstronomy}</ul>
    )
}

export default AstronomyList;
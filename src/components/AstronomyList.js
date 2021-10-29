import React from 'react';
import AstronomyCard from './AstronomyCard';
import styled from 'styled-components'

function AstronomyList({astronomy}){
    const renderAstronomy = astronomy.map(oneAstronomy =><AstronomyCard key={oneAstronomy.date} astronomy={oneAstronomy}/>)
    return(
        
        <StyleGroup>{renderAstronomy}</StyleGroup>
    )
}

export default AstronomyList;

const StyleGroup = styled.div `
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-content:center;
  padding: 150px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 100px;

  img{
      height:200px;
      width:200px;
      filter: alpha(opacity=100);filter: alpha(opacity=100);
    }
img:hover{
    opacity: 0.3;
    filter: alpha(opacity=40);  
`
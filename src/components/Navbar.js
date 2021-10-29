import React from "react"; 
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
function NavBar (){
    return(
        <>
            <StyleHeader>
                Astronomy Refined 
                </StyleHeader>

                <StyleNav>
                <NavLink to='/'>
                    AstronomyPage
                </NavLink>
                <NavLink to='/Weekly'>
                    Weekly
                </NavLink>
                <NavLink to='/Daily'>
                    Daily
                </NavLink>
                <NavLink to='/NewAstronomyForm'>
                    Sumbit your Picture
                </NavLink>
                </StyleNav>
                
</>
    )   
};
export default NavBar


const StyleNav = styled.div `
padding: 15px;
display:flex;
justify-content: space-evenly;
align-content:center;
font-size:25px;
padding-bottom: 5px;
font-family: 'Architects Daughter', cursive;
font-weight:bold;
border-bottom:2px solid gray;
`
const StyleHeader = styled.h1`
    font-weight:bold;
    font-family: 'Architects Daughter', cursive;
    font-size:25px;
    background: #f70776; ;
 
`
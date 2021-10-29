import React, {useState} from "react";
import styled from 'styled-components'

function AstronomyCard({astronomy:{title , copyright, explanation, date, url, media_type }}){
    const [showExpand, setShowExpand]=useState(false)
    function handleClick(){
        setShowExpand((currentShowExpand)=> !currentShowExpand)
    }
    return (
        <StyleCard  onClick={handleClick}>
            <div className='title'>{showExpand ? title : null}</div>
            <div className='date'>{showExpand ? date : null}</div>
            <div className='copy'>{showExpand ?  copyright : null}</div>
             {media_type === 'video' ? <iframe src={url}  title={title}/>
       : <img src={url} alt="name"/>}
<p className="card_explanation" >{showExpand ? explanation: null}



    
    </p>
</StyleCard>
    )
}
export default AstronomyCard

const StyleCard = styled.div `
    

    .card_explanation{
        
        font-size: 15px;
        color:black; 
        background-color:white;      
    }

   .title{
        color:white;

    }

    div.date{
        color:white;
    }

    div.copy{
        color:white;
    }
`
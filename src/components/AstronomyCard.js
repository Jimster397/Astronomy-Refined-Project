import React, {useState} from "react";

function AstronomyCard({astronomy:{title ,copyright, explanation, date, url, media_type }}){
    const [showExpand, setShowExpand]=useState(false)
    function handleClick(){
        setShowExpand((currentShowExpand)=> !currentShowExpand)
    }
    return (
        <div className='card' onClick={handleClick}>
            <div>{showExpand ? title : null}</div>
            <div>{showExpand ? date : null}</div>
            <div>{showExpand ?  copyright : null}</div>
             {media_type === 'video' ? <iframe src={url}  />
       : <img src={url} alt="name"/>}
<div className="card_explanation" >{showExpand ? explanation: null}



    
    </div>
</div>
    )
}
export default AstronomyCard
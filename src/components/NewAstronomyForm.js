import React, {useState} from "react";
import styled from 'styled-components'

const initialvalue= {
    title: '',
    copyright: '',
    explanation: '',
    date: '',
    url: '',
    media_type: '',
  }
  function NewAstronomyForm({setAstronomy}) {
      const [NewAstronomy, setNewAstronomy]= useState(initialvalue)
      function handleChange(e){
          setNewAstronomy((currentNewAstronomy)=>{
              return{
                  ...currentNewAstronomy,
                  [e.target.name]: e.target.value,
              }
          })
      }
      function handleSubmit(e){
        e.preventDefault()  
        fetch('http://localhost:4000/astronomy',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(NewAstronomy)
          }).then(resp=> resp.json())
            .then((data)=>{
                setAstronomy((currentNewAstronomy)=>[...currentNewAstronomy, data])
                setNewAstronomy(initialvalue)
            })
      }
      return (
          <StyleForm className='new-astronomy-form'>
              <h2>New Picture</h2>
              <form className="apple" onSubmit={handleSubmit}>
                  <input className="title" type='text' name='title' placeholder='Astronomy title' value={NewAstronomy.title} onChange={handleChange}/>
                  <input className="copyright" type='text' name='copyright' placeholder='Astronomy copyright' value={NewAstronomy.copyright} onChange={handleChange}/>
                  <input className="explanation" type='text' name='explanation' placeholder='Astronomy explanation' value={NewAstronomy.explanation} onChange={handleChange}/>
                  <input className="date" type='date' name='date' placeholder='Astronomy date' value={NewAstronomy.date} onChange={handleChange}/>
                  <input className="url" type='text' name='url' placeholder='Astronomy url' value={NewAstronomy.url} onChange={handleChange}/>
                  <input className="media" type='text' name='media_type' placeholder='Astronomy media_type' value={NewAstronomy.media_type} onChange={handleChange}/>
                  <button className="submit" type="submit">Add Picture</button>
              </form>
          </StyleForm>
      )
  }
  export default NewAstronomyForm

  const StyleForm = styled.div ` 
  .apple{
      display:flex;
      justify-content:space-evenly

  }
 
 h2{
      font-size:30px;
     font-weight:bold;
      color:purple;
      font-family: 'Architects Daughter', cursive;
  }
  .title{
      box-sizing: border-box;
      padding:4px;
  }
  input[type=text]:focus {
      background: #feffdf
  }
  
  input[type=text] {

-webkit-appearance: none;
  appearance: none;
}
  .copyright{
      box-sizing: border-box;
      padding:5px;
  }
  .explanation{
      box-sizing: border-box;
      padding:25px;
  }
  .date{
      box-sizing: border-box;
      padding:3px;
  }
  .url{
      box-sizing: border-box;
      padding:5px;
  }
  .media{
      box-sizing: border-box;
      padding:5px;

  }

  .submit{
      box-sizing: border-box;
      padding:10px;
      float:left;
      border: 2px solid  #feffdf;
      border-radius:10px;
  }
  
  .submit:hover{
      background:#3e4a61;
      }

  input{
      width:25%;
  }

`
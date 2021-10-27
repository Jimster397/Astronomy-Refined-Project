import React, {useState} from "react";
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
                setNewAstronomy(initialvalue)
                setAstronomy((currentNewAstronomy)=>[...currentNewAstronomy, data])
            })
      }
      return (
          <div className='new-astronomy-form'>
              <h2>New Picture</h2>
              <form onSubmit={handleSubmit}>
                  <input type='text' name='title' placeholder='Astronomy title' value={NewAstronomy.title} onChange={handleChange}/>
                  <input type='text' name='copyright' placeholder='Astronomy copyright' value={NewAstronomy.copyright} onChange={handleChange}/>
                  <input type='text' name='explanation' placeholder='Astronomy explanation' value={NewAstronomy.explanation} onChange={handleChange}/>
                  <input type='date' name='date' placeholder='Astronomy date' value={NewAstronomy.date} onChange={handleChange}/>
                  <input type='text' name='url' placeholder='Astronomy url' value={NewAstronomy.url} onChange={handleChange}/>
                  <input type='text' name='media_type' placeholder='Astronomy media_type' value={NewAstronomy.media_type} onChange={handleChange}/>
                  <button type="submit">Add Picture</button>
              </form>
          </div>
      )
  }
  export default NewAstronomyForm
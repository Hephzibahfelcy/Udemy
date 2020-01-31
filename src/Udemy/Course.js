import React from 'react'
import '../../src/App.css'

const Course=(props)=>
{
  return(
    <div className="App">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <h3>{props.Author}</h3>
      <h4>{props.Description}</h4>
      <br></br>
  <button className="Button">Add To cart</button>
      </div>
     
  );
}
 

export default Course;
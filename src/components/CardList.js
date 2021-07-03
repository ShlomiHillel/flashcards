
import React from 'react';



export default function CardList() {
    const Length = localStorage.length; 
    console.log(Length); 

    const Delete = ()=>{
     console.log('Delete');  
     localStorage.removeItem(`Question0`)
     localStorage.removeItem(`Answer0`)  
    }
    
  return (
    <div>
     
        <div>
            <h5>Question </h5>
            <p>{localStorage.getItem(`Question0`)} </p>
            <h5>Answer </h5>
            <p>{localStorage.getItem(`Answer0`)} </p>
            <p> 
            <button type="submit" onClick={Delete}>Delete</button>
            <button type="submit" onClick={Delete}>Edit</button>
            </p>   
        </div>
    </div>
  );
}

import React from 'react';
import STORE from './Store';

function Stage (){

    const stagePeople = STORE.participants.filter((person)=> person.onStage === true);
  
    return (
      <div>
  
  
      {stagePeople.map((person) => 
        
          <div key ={person.id}> 
            <img src = {person.avatar} alt="chat icon"/>
              <p>{person.name}</p>
        </div>
  )}
      </div>
    )
  }
  
  
  export default Stage;
  
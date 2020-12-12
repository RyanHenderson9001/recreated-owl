import React from 'react';

import STORE from './Store';

function List(){
    return (    <div>
        {STORE.participants.map((person)=>
        <div key={person.id}> 
        <img src = {person.avatar} alt="chat icon"/>
        <p>{person.name}</p>
        <p>{(person.onStage) ? 'On stage' : 'Off stage'}</p>
        </div>
        
        )}
    </div>)

}

export default List;
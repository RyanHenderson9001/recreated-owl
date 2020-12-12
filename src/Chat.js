import React from 'react';

import STORE from './Store.js';

function Chat (){
    const { participants, chatEvents} = STORE;
  
     return (
       <div className="chatBox">
       {chatEvents.map((event, index) => {
         let id = event.participantId;
         let name = participants.find((person) => person.id === id).name;
         let message = event.message
         let time = new Date(event.timestamp).toString()

         switch(event.type){
           case 'message':
            return (
                      <div className="chatEvent" key ={index}>
                      <p className="name" >
          
                        {name}: {message}
                      </p>
                   </div>
                    )
          case 'thumbs-up':
            return (
                <div className="chatEvent" key ={index}>
                <p className="message">
                  {time}
                  {name} gave a thumbs-up
                </p>
             </div>
               )
          case 'thumbs-down':
            return (
                <div className="chatEvent" key ={index}>
                <p className="message">
                {time}
                  {name} gave a thumbs-down
                </p>
             </div>
               )
            case 'clap':
                return (
                    <div className="chatEvent" key ={index}>
                    <p className="message">
                    {time}
                      {name} clapped
                    </p>
                 </div>
                   )
            case 'raise-hand':
                return (
                    <div className="chatEvent" key ={index}>
                    <p className="message">
                    {time}
                      {name} raised their hand
                    </p>
                 </div>
                   )
            case 'join':
                return (
                    <div className="chatEvent" key ={index}>
                    <p className="message">
                    {time}
                      {name} joined
                    </p>
                 </div>
                   )
            case 'join-stage':
                return (
                    <div className="chatEvent" key ={index}>
                    <p className="message">
                    {time}
                      {name} joined the stage
                    </p>
                 </div>
                   )
            case 'leave-stage':
                return (
                    <div className="chatEvent" key ={index}>
                    <p className="message">
                    {time}
                      {name} left the stage
                    </p>
                 </div>
                   )
          default:
              break;
         }
     })}
  
        
        </div>
     )
  
  }
  
export default Chat;
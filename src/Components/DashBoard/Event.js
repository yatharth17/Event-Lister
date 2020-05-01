import React,{useState} from 'react';

const Event=({event,index})=>{
    
   return(
    <div className='post bg-white p-1 my-1'>
    <h2> Event {index}</h2>
    <h4 className=" text-primary">{event.text}</h4>
    
    </div>
   )
}
export default Event
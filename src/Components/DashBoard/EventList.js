import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
import {useAlert} from 'react-alert'
import Event from './Event'

const EventList=()=>{
 const {state}=useContext(UserContext)
 const [events,setEvents]=useState(
     []
 )
 useEffect(() => {
     axios.get('https://hidden-crag-61767.herokuapp.com/event',{
        headers: {"x-auth-token":state.token}
     }).then(res=>{
         console.log(res)
         setEvents(
             res.data
         )
     })
 }, [])
 console.log(events)
 return(
     <div className="posts">
         {events.map((event,index)=>(
             <Event index={index} event={event}/>
         ))}
      </div>
    
 

 )
        }
export default EventList
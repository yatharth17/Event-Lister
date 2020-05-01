import React,{useContext,useState} from 'react';
import {UserContext} from '../../context/UserContext'
import{Redirect} from 'react-router-dom'
import EventForm from './EventForm'
const DashBoard=()=>{
    const {state,dispatch}=useContext(UserContext)
    const [text,setText]=useState('')
    console.log(state.token)
    if(!state.isAuthenticated) return <Redirect to='/'/>
    return(
        <div className='events'>
        <h1 className='large text-primary'>Create an Event</h1>
        <p className='lead'>
        <i className='fas fa-user' /> 
      </p>
       <EventForm/>
            {/* <h1>{`Welcome ${state.user.email}`}</h1> */}
        </div>
    )
}
export default DashBoard
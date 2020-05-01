import React,{useContext,useState} from 'react';
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
import {useAlert} from 'react-alert'
import EventList from './EventList'
const EventForm=()=>{
    const[text,setText]=useState('')
    const {state,dispatch}=useContext(UserContext)
    const alert=useAlert()
    return(
        <div className='post-form'>
        
          <h3>Say Something...</h3>
        
        <form
          className='form my-1'
          onSubmit={e => {
            e.preventDefault();
            console.log(state.token)
            axios.post("https://hidden-crag-61767.herokuapp.com/event",{
                text
            },{headers: {"x-auth-token":state.token},}).
            then(res=>{
                console.log(res)
                alert.success('Event added')
            })
            setText('');
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='Create an Event'
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
        <h1 className='large text-primary'>Your Events</h1>

        <EventList/>
      </div> 
    )
}
export default EventForm
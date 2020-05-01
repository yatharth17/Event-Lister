import React,{useContext,useState} from 'react';
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
import {useAlert} from 'react-alert'
import EventList from './EventList'
import {trackPromise} from 'react-promise-tracker'
const EventForm=()=>{
    const[text,setText]=useState('')
    const {state,dispatch}=useContext(UserContext)
    const alert=useAlert()
    return(
        <div className='post-form'>
        
          <h3>Give Details about your event</h3>
        
        <form
          className='form my-1'
          onSubmit={e => {
            e.preventDefault();
            console.log(state.token)
            trackPromise(axios.post("https://hidden-crag-61767.herokuapp.com/event",{
                text
            },{headers: {"x-auth-token":state.token},}).
            then(res=>{
                console.log(res)
                alert.success('Event added')
            }).catch(err=>{
              console.log(err)
            }))
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
        <h1 className='large text-primary'>All Events</h1>
         <p className="lead">(Refresh to See Latest Events)</p>
        <EventList/>
      </div> 
    )
}
export default EventForm
import React,{useContext} from 'react';
import {Link,Redirect} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
const Landing=()=>{
   const {state}=useContext(UserContext)
   if(state.isAuthenticated) return <Redirect to='/dashboard'/>
    return(
        <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Event Lister</h1>
          <p className='lead'>
            Get Started Now
          </p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Landing

import React,{useState,Fragment,useContext} from 'react';
import {Link,useHistory, Redirect} from 'react-router-dom'
import axios from 'axios'
import {useAlert} from 'react-alert'
import {UserContext} from '../../context/UserContext';
import {trackPromise} from 'react-promise-tracker'


const Login=()=>{
  const alert=useAlert()
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  const [formData,setformData]=useState({
    email:"",
    password:""
  })
  console.log(state)
  const {email,password}=formData
  const onChange=e=>{
    
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const onSubmit=async e=>{
    e.preventDefault();
    trackPromise(axios.post('https://hidden-crag-61767.herokuapp.com/auth',{
      email,password
    }).then(res=>{
      console.log(res)
       if(res.data.errors){
         alert.error(res.data.errors[0].msg)
         return;
       }
       let token=res.data.token
       dispatch({
         type:"LOGIN",
         payload:{
           user:{
              email
           },
           token
         }
       })
       history.push('/dashboard')
    
    }))
  }
  if(state.isAuthenticated)return <Redirect to='/dashboard'/>
  return(
    <div className="signup">
    <h1 className='large text-primary'>Sign In</h1>
    <p className='lead'>
      <i className='fas fa-user' /> Sign Into Your Account
    </p>
    <form className='form' onSubmit={e => onSubmit(e)}>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={e => onChange(e)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
          minLength='6'
        />
      </div>
      <input type='submit' className='btn btn-primary' value='Login' />
    </form>
    <p className='my-1'>
      Don't have an account? <Link to='/login'>Sign Up</Link>
    </p>
  </div>
  )
}
export default Login
import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import {useAlert} from 'react-alert'
import { trackPromise } from 'react-promise-tracker';

const SignUp=()=>{
    const alert=useAlert()
    let history=useHistory()
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
        
    })
    const {name,email,password,password2}=formData
    const onChange= e=>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
         e.preventDefault()
         if(password!=password2){
           alert.error('Passwords Do Not Match')
           return;
         }
         trackPromise(axios.post('https://hidden-crag-61767.herokuapp.com/register',{
           name,email,password
         }).then((res)=>{
           console.log(res)
           alert.success('Signup success')
           history.push('/login');
         }
         ).catch(err=>{
           console.log(err)
         }))
         
    }
    return(
        <div  className='signup'>
<h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            required
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div >
    )
    
}
export default SignUp

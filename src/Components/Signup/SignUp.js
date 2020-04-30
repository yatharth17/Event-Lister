import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const SignUp=()=>{
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
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
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
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
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

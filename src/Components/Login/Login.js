import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Login=()=>{
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const {email,password}=formData
    const onChange=(e)=>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return(
        <div className='signup'>
<h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form className='form' >
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e=>onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e=>onChange(e)}
            
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
    )
}
export default Login
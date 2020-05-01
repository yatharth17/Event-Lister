import React,{useContext, Fragment} from 'react';
import {Link,useHistory} from 'react-router-dom'
import{UserContext} from '../../context/UserContext'
const NavBar=()=>{
    const history=useHistory()
    const {state,dispatch}=useContext(UserContext)

      const onClick=(e)=>{
        e.preventDefault();
        dispatch({
          type:'LOGOUT'
         
        })
        history.push('/')
      }
      const authLinks = (
        <ul>
        <li>
          {state.user?state.user.email:'null'}
        </li>
          <li>
            <a onClick={e=>onClick(e)} href='#!'>
              <i className='fas fa-sign-out-alt' />{' '}
              <span className='hide-sm'>Logout</span>
            </a>
          </li>
        </ul>
      )
      const guestLinks=(
        <ul>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
      )
    return( <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' />EventLister
        </Link>
      </h1>
      <Fragment>{state.isAuthenticated?authLinks:guestLinks}</Fragment>
    </nav>)
}
export default NavBar
import React from 'react';
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return( <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' />EventLister
        </Link>
      </h1>
      <ul>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
    </nav>)
}
export default NavBar
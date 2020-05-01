import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/SignUp'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/Landing/Landing'
import DashBoard from './Components/DashBoard/DashBoard'
import {UserContextProvider, UserContext} from './context/UserContext';
const App=()=>{
  return(
    <div className="App">
    <BrowserRouter>
    
    <UserContextProvider>
    <NavBar/>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/dashboard' component={DashBoard}/>
      </Switch>
      </UserContextProvider>
    </BrowserRouter>

    </div>
  )
}

export default App;

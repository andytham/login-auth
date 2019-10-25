import React, { useState } from 'react'
import axios from 'axios';

const AuthContext = React.createContext()

function AuthProvider(props) {
  // add loading image if fetching user data

  const [state, setState] = useState({user: ''}) // initial state, check localStorage first

  const login = (input) => { // make a login request, for now let anyone login with whatever
    axios.post('/auth/login', {
      username: input.username,
      password: input.password
      })
      .then(data => {
        if (data.data.success){
          setState({...state, user: input.username});
        } else {
          //error
        }
      })
      .catch(err => {console.log(err);})
    
    
  } 
  const register = () => { // register the user
  } 
  const logout = () => { // clear the token in localStorage and the user data
  }
  
  return (
    <AuthContext.Provider value={{state, login, logout, register}} {...props} />
  )
}

export {AuthContext, AuthProvider}
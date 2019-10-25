import React, { useState } from 'react'
import axios from 'axios';

const AuthContext = React.createContext()

function AuthProvider(props) {
  // add loading image if fetching user data

  const [state, setState] = useState({user: ''}) // initial state, check localStorage first

  const login = async (input) => { // make a login request, for now let anyone login with whatever
    try {
      let res = await axios.post('/auth/login', 
      {
        username: input.username,
        password: input.password
      })
      console.log(res)
      setState({...state, user: input.username})
    } catch (err) {
      console.log(err);
    }


    
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
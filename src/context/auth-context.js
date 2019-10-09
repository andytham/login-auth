import React, { useState } from 'react'
const AuthContext = React.createContext()

function AuthProvider(props) {
  // add loading image if fetching user data

  const [state, setState] = useState({user: ''}) // initial state
  
  const login = (input) => { // make a login request, for now let anyone login with whatever
    setState({...state, user: input})
  } 
  const register = () => { // register the user
  } 
  const logout = () => { // clear the token in localStorage and the user data
  }
  
  return (
    <AuthContext.Provider value={{state, login, logout, register}} {...props} />
  )
}

export {AuthProvider, AuthContext}
import React, { useState } from 'react'
import axios from 'axios';

const AuthContext = React.createContext()

function AuthProvider(props) {
  // add loading image if fetching user data
  
  const [state, setState] = useState({ user: '' }) // initial state

  const restore = async () => { // restore session from JWT
    try {
      let data = await axios.post('/auth/restore')
      setState({ ...state, user: data.data.user })
    } catch (err) {
      console.log(err.response.data);
    }
  }
  
  const login = async (input) => {
    try {
      await axios.post('/auth/login',
        {
          username: input.username,
          password: input.password
        }
      )
      setState({ ...state, user: input.username })
    } catch (err) {
      console.log(err.response.data);
    }
  } 

  const register = () => { // register the user
  }
  const logout = () => {
    setState({ ...state, user: ''})
    // clear localStorage
  }

  return (
    <AuthContext.Provider value={{ state, restore, login, logout, register }} {...props} />
  )
}

export { AuthContext, AuthProvider }
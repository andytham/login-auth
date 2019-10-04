import React from 'react'
// import {FullPageSpinner} from '../components/lib'
const AuthContext = React.createContext()

function AuthProvider(props) {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  // if (weAreStillWaitingToGetTheUserData) {
  //   return <FullPageSpinner />
  // }

  const data = {user: ''} // initial state

  const login = (input) => {data.user = input} // make a login request, for now let anyone login with whatever
  const register = () => {} // register the user
  const logout = () => {} // clear the token in localStorage and the user data

  
  return (
    <AuthContext.Provider value={{data, login, logout, register}} {...props} />
  )
}

const useAuth = () => React.useContext(AuthContext)
export {AuthProvider, useAuth}
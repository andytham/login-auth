import React, { useContext } from 'react'
import { AuthContext } from './auth-context'

const UserContext = React.createContext()

function UserProvider(props) {
  const auth = useContext(AuthContext)
  const {
    state: {user},
  } = auth
  return <UserContext.Provider value={user} {...props} />
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export {UserProvider, useUser}

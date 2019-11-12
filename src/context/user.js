import React, { useContext } from 'react'
import { AuthContext } from './auth'

const UserContext = React.createContext()

function UserProvider(props) {
  const auth = useContext(AuthContext)
  const {
    state: { user },
  } = auth
  return <UserContext.Provider value={user} {...props} />
}

export { UserContext, UserProvider }

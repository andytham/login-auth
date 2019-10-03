import React from 'react'
import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'

export default function AppProviders({children}) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}
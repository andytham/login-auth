import React, { Suspense, useContext } from 'react'
import { UserContext } from './context/user'
const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

export default function App() {
	const user = useContext(UserContext)
  return(
		<Suspense fallback={<div>Loading...</div>}>
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</Suspense>
		)
}
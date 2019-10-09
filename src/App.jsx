import React, { Suspense } from 'react'
import {useUser} from './context/user-context'
const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

export default function App() {
	const user = useUser()
  return(
		<Suspense fallback={<div>Loading...</div>}>
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</Suspense>
		)
}
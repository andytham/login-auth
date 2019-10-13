import React, { Suspense, useContext } from 'react'
import { UserContext } from './context/user'
const AuthenticatedApp = React.lazy(() => import('./Authenticated'))
const UnauthenticatedApp = React.lazy(() => import('./Unauthenticated'))

import './css/App.scss'

export default function App() {
	const user = useContext(UserContext)
  return(
		<Suspense fallback={<div>Loading...</div>}>
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</Suspense>
		)
}
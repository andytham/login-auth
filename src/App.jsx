import React, { Suspense, useContext, useEffect } from 'react'
import { UserContext } from './context/user'
import { AuthContext } from './context/auth';

const AuthenticatedApp = React.lazy(() => import('./Authenticated'))
const UnauthenticatedApp = React.lazy(() => import('./Unauthenticated'))


import './css/App.scss'

export default function App() {
	const user = useContext(UserContext)
	const auth = useContext(AuthContext)

	useEffect(() => {
		auth.restore()
	},[])

  return(
		<Suspense fallback={<div>Loading...</div>}>
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</Suspense>
		)
}
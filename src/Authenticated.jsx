import React, { useContext } from 'react';
import { UserContext } from './context/user'
export default function AuthenticatedApp() {
	const user = useContext(UserContext);
	
	return (
		<div>
			User is authenticated, welcome, {user}.
		</div>
	)
}
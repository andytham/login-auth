import React, { useContext } from 'react';
import { UserContext } from './context/user'
import Logout from './components/Logout';

export default function AuthenticatedApp() {
	const user = useContext(UserContext);

	return (
		<div>
			User is authenticated, welcome, {user}.
			<Logout />
		</div>
	)
}
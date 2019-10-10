import React, { useContext } from 'react';
import { userContext } from './context/user'
export default function AuthenticatedApp(){
	const user = useContext(userContext);
	
	return(
		<div>
			User is authenticated, welcome, {user}.
		</div>
	)
}
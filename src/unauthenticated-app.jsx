import React from 'react';
import Login from './components/Login';

export default function UnauthenticatedApp(){
	return(
		<div>
			User is unauthenticated
			<Login />
		</div>
	)
}
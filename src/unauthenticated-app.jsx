import React from 'react';
import Login from './Login';

export default function UnauthenticatedApp(){
	return(
		<div>
			User is unauthenticated
			<Login />
		</div>
	)
}
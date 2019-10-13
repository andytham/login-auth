import React from 'react';
import Login from './components/Login';

export default function UnauthenticatedApp(){
	return(
		<div className="unauthenticated">
			User is unauthenticated
			<Login />
		</div>
	)
}
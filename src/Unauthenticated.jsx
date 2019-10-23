import React from 'react';
import { Route } from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register'

import './css/form.scss'

export default function UnauthenticatedApp(){
	return(
		<div className="unauthenticated">
			User is unauthenticated
				<Route exact path="/">
					<Login />
				</Route>				
				<Route exact path="/register">
					<Register />
				</Route>
		</div>
	)
}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';
import useFormInput from '../helper/form.js';

export default function Login(){
	const auth = useContext(AuthContext)
	const username = useFormInput('');
	const password = useFormInput('');

	function handleLogin(e){
		e.preventDefault()
		let input = {
			username: username.value,
			password: password.value
		}
		auth.login(input)
		auth.register()
	}

	return (
		<div className="login-wrapper">
			<form className="login-form">
				<input 
					type="text"
					placeholder="Username"
					{...username}
				/>
				<input 
					type="password"
					placeholder="Password"
					{...password}
				/>
				<input 
					type="submit" 
					value="Login" 
					onClick={handleLogin}
				/>
				<Link to='/register'>
					<input type="button" value="Register" />
				</Link>
			</form>
		</div>
	)
}
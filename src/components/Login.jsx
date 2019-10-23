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
		auth.login(username.value)
		auth.register()
	}

	return (
		<div className="login-wrapper">
			<form className="login-form">
				<label>
					Username
					<input 
						type="text"
						{...username}
						/>
				</label>
				<label>
					Password
					<input 
						type="password"
						{...password}
					/>
				</label>
				<input type="submit" value="Login" onClick={handleLogin}/>
				<Link to='/register'>
					<input type="button" value="Register" />
				</Link>
			</form>
		</div>
	)
}
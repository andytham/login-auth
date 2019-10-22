import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';
import { UserContext } from '../context/user';
import useFormInput from '../helper/form.js';

export default function Login(){
	const user = useContext(UserContext)
	const auth = useContext(AuthContext)
	const username = useFormInput('');
	const password = useFormInput('');

	function handleLogin(e){
		e.preventDefault()
		auth.login(username.value)
		auth.register()
	}

	return (
		<div className="login">
			<form>
				<label>
					Username
					<input 
						type="text"
						{...username}
						/>
				</label>
				<br />
				<label>
					Password
					<input 
						type="password"
						{...password}
					/>
				</label>
				<br />
				<input type="submit" value="Login" onClick={handleLogin}/>
				<Link to='/register'>
					<input type="button" value="Register" />
				</Link>
			</form>
		</div>
	)
}
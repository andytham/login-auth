import React, { useContext } from 'react';

import useFormInput from '../helper/form.js'
import { UserContext } from '../context/user';

export default function Register(){
	const user = useContext(UserContext);
	const username = useFormInput('');
	const email = useFormInput('');
	const password = useFormInput('');
	const password2 = useFormInput('');

	if (user) {
		// placeholder, should redirect instead 
		return(
			<div>You are already logged in.</div>
		)
	}

	function handleRegister(e){
		e.preventDefault();
		// should hit the backend, create a user etc
	}
	return(
		<div className="register-wrapper">
			<form className="register-form">
				<label>
					Username
					<input
					type="text"
					{...username}
					/>
				</label>
				<label>
					E-mail
					<input
					type="text"
					{...email}
					/>
				</label>
				<label>
					Password
					<input
					type="password"
					{...password}
					/>
				</label>
				<label>
					Retype your password
					<input
					type="password"
					{...password2}
					/>
				</label>
				<input type="submit" value="Register" onClick={handleRegister} />

			</form>
		</div>
	)
}
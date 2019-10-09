import React, { useState } from 'react';

import {useAuth} from './context/auth-context'

export default function Login(){
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	function handleClick(){

	}
	return (
		<div className="login">
			<form>
				<label for="username">Username
					<input 
						type="text"
						value={username}
						onChange={setUsername}
						/>
				</label>
				<br />
				<label for="password">Password
					<input 
						type="text"
						value={password}
						onChange={setPassword}
					/>
				</label>
				<br />
				<input type="submit" value="login" />
			</form>
		</div>
	)
}
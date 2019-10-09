import React, { useState } from 'react';

import { useAuth } from './context/auth-context'

export default function Login(){
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	function handleUsernameChange(e){
		setUsername(e.target.value)
	}
	function handlePasswordChange(e){
		setPassword(e.target.value)
	}
	return (
		<div className="login">
			<form>
				<label for="username">Username
					<input 
						type="text"
						value={username}
						onChange={handleUsernameChange}
						/>
				</label>
				<br />
				<label for="password">Password
					<input 
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<input type="submit" value="login" />
			</form>
		</div>
	)
}	
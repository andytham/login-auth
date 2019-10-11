import React, { useState, useContext } from 'react';

import { AuthContext } from '../context/auth'
import { UserContext } from '../context/user';

export default function Login(){
	const user = useContext(UserContext)
	const auth = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	function handleUsernameChange(e){
		setUsername(e.target.value)
	}
	function handlePasswordChange(e){
		setPassword(e.target.value)
	}
	function handleLogin(e){
		e.preventDefault()
		auth.login(username)
		auth.register()
	}
	function test(e){
		e.preventDefault()
		console.log(user)
	}
	return (
		<div className="login">
			<form>
				<label>
					Username
					<input 
						type="text"
						value={username}
						onChange={handleUsernameChange}
						/>
				</label>
				<br />
				<label>
					Password
					<input 
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<input type="submit" value="login" onClick={handleLogin}/>
				<input type="submit" value="USER" onClick={test}/>
			</form>
		</div>
	)
}	
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

export default function Logout() {
	const auth = useContext(AuthContext);

	function handleLogout(e) {
		e.preventDefault()
		auth.logout()
	}
	return (
		<div className="logout">
			<input type="button" onClick={handleLogout} value="Logout" />
		</div>
	)
}
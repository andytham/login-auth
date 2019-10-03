import React from 'react';
import Login from './Login';
import Home from './Home';

import '../css/App.css';

export default function App(){
	return(
		<div className="App">
			Hello World
			<Login />
			<Home />
		</div>
	)
}
import React, { useState, createContext } from 'react';
import user, { UserProvider } from './context';
import Home from './Home';

export default function Login(){
	const [name, setName] = useState('test') 

	function handleNameChange(e){
		setName(e.target.value)
	}

	return(
		<UserProvider value={name}>
		<div>
			<section>
				<div label="fdsfsdbs">
					<input 
						value={name}
						onChange={handleNameChange}
					/>
				</div>
			</section>
		</div>
		<Home />
		</UserProvider>
	)
}
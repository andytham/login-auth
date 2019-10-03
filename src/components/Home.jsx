// import React, { useState } from 'react';

// export default function Home(){
// 	const [name] = useState('name')
// 	return(
// 		<div className="home">
// 			Hello 
// 		</div>
// 	)
// }
import React from 'react';
import userContext from './context';

export default function Home(){
	const user = React.useContext(userContext);
	return (
		<div>
			This is {user}
		</div>
	)
}
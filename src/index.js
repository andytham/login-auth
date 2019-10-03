import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppProviders from './context';

render(
	<AppProviders>
  	<App />
	</AppProviders>, document.getElementById('root')
)

if (module.hot) {
	module.hot.accept();
}
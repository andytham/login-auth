import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppProviders from './context';
import { BrowserRouter } from 'react-router-dom';

render(
	<BrowserRouter>
		<AppProviders>
  		<App />
		</AppProviders>
	</BrowserRouter>, document.getElementById('root')
)

if (module.hot) {
	module.hot.accept();
}
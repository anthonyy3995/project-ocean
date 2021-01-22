import React from 'react';
import {useRoutes, BrowserRouter, Route} from 'react-router-dom'
import Main from './Pages/Main.js'
import Resources from './Pages/Resources.js'

function App() {

  const routes = [
		{
			path: "/",
			element: <Main />,
		},
		{
			path: "/resources",
			element: <Resources />,
		},
	];

	return useRoutes(routes);
}

export default App;

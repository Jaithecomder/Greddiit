import React from 'react';
import { Route, Routes } from 'react-router-dom'

import LoginPage from './Components/LoginPage/LoginPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';

function App() {

	return (
		<Routes>
			<Route
				element={<LoginPage />}
				path="/"
			/>
			<Route
				element={<ProfilePage />}
				path="/profile"
			/>
		</Routes>
	);
}

export default App;

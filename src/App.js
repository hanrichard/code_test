import React from 'react';
import './App.css';
import Companies from './container/Companies';
import CompanyHeader from './components/CompanyHeader';

function App() {
	return (
		<div className="App">
			<CompanyHeader />
			<Companies />
		</div>
	);
}

export default App;

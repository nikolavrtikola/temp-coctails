import React from 'react';
import CoctailList from '../Components/CoctailList';
import SearchForm from '../Components/SearchForm';

const Home = () => {
	return (
		<main>
			<h1>Home Page</h1>
			<SearchForm />
			<CoctailList />
		</main>
	);
};

export default Home;

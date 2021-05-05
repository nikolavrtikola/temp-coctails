import React, { useRef } from 'react';
import { useGlobalContext } from './../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = useRef('');
	const searchCoctails = () => {
		setSearchTerm(searchValue.current.value);
	};

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className='section search'>
			<h1>SearchForm</h1>
			<form action='' className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>Search Your Favorite Coctail</label>
					<input
						type='text'
						id='name'
						ref={searchValue}
						onChange={searchCoctails}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;

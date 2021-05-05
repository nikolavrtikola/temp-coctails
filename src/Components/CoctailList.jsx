import React from 'react';
import { useGlobalContext } from './../context';
import Coctail from './Coctail';
import Loading from './Loading';

const CoctailList = () => {
	const { loading, coctails } = useGlobalContext();
	console.log(coctails);
	if (loading) {
		return <Loading />;
	}
	if (coctails.length < 1) {
		return (
			<h2 className='section-title'>
				no cocktails matched your search criteria
			</h2>
		);
	}

	return (
		<section className='section'>
			<h1 className='section-title'>CoctailList</h1>
			<div className='cocktails-center'>
				{coctails.map((coctail) => {
					return <Coctail key={coctail.id} {...coctail} />;
				})}
			</div>
		</section>
	);
};

export default CoctailList;

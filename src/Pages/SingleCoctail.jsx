import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';

const SingleCoctail = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [coctail, setCoctail] = useState(null);

	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

	const fetchDrinkById = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			const { drinks } = data;
			if (drinks) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = drinks[0];
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				const newCoctail = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				};

				setCoctail(newCoctail);
			} else {
				setCoctail(null);
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [url]);

	useEffect(() => {
		setIsLoading(true);
		fetchDrinkById();
	}, [id, fetchDrinkById]);

	if (isLoading) {
		return <Loading />;
	}
	if (!coctail) {
		return <h2 className='section-title'>no cocktail to display</h2>;
	} else {
		const {
			name,
			info,
			category,
			glass,
			image,
			ingredients,
			instructions,
		} = coctail;
		return (
			<section className='section cocktail-section'>
				<Link to='/' className='btn btn-primary'>
					back Home
				</Link>
				<h2 className='section-title'>{name}</h2>
				<div className='drink'>
					<img src={image} alt={name} />

					<div className='drink-info'>
						<p>
							<span className='drink-data'>name :</span>
							{name}
						</p>
						<p>
							<span className='drink-data'>category :</span>
							{category}
						</p>
						<p>
							<span className='drink-data'>info :</span>
							{info}
						</p>
						<p>
							<span className='drink-data'>glass :</span>
							{glass}
						</p>
						<p>
							<span className='drink-data'>instructions :</span>
							{instructions}
						</p>
						<p>
							<span className='drink-data'>ingredients :</span>
							{ingredients.map((item, index) => {
								return item ? <span key={index}>{item}</span> : null;
							})}
						</p>
					</div>
				</div>
			</section>
		);
	}
};

export default SingleCoctail;

import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '@/utils';
import Image from 'next/image';

export default async function Home() {
	const allCars = await fetchCars();

	/* Check if all the data is empty using conditional logic. */
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	console.log(allCars);

	return (
		/* the main className previously had overflow-hidden, which broke the dropdown */
		<main className='overflow-hidden'>
			<Hero />

			<div
				className='mt-12 padding-x padding-y max-width'
				// id='discover'
			>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>

				<div className='home__filters'>
					<SearchBar />

					<div className='home__filter-container'>
						<CustomFilter title='fuel' />
						<CustomFilter title='year' />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className='home__cars-wrapper'>
							{allCars?.map((car) => (
								<CarCard car={car} />
							))}
						</div>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl'>Oops, no results</h2>
					</div>
				)}
			</div>
		</main>
	);
}

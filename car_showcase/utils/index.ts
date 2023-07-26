export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '92df356189msh30feb5b565113e6p126bc5jsna15febd97759',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
		{ headers: headers }
	);

	const result = await response.json();

	return result;
}

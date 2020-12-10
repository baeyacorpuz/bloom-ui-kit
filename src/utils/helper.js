import Pokedex from 'pokedex-promise-v2';

const options = {
	protocol: 'https',
	hostName: 'pokeapi.co',
	versionPath: '/api/v2/',
	cacheLimit: 100 * 1000, // 100s
	timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);

export const getPokemonByName = (name) => {
	P.getPokemonByName(name)
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(`There was an error: ${error}`)
		})
}

export const getTypesList = async () => {

	const apiResponse = await P.getTypesList()
		.then((response) => response.results)
		.catch((error) => error.response)


	return apiResponse;
}

export const getTypeByName = async (name) => {
	const apiResponse = await P.getTypeByName(name)
		.then((response) => response)
		.catch((error) => error.response)

	return apiResponse;
}
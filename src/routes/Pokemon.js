import axios from "axios"

export const getResources = async () => {
  const apiResponse = axios.get(process.env.REACT_APP_POKEAPI)
  .then((response) => response)
  .catch((error) => error.response)


  return apiResponse;
};

export const getPokemonListing = async (offset) => {
  const params = {
    offset: 20,
    limit: 20
  }
  const apiResponse = await axios.get(process.env.REACT_APP_POKEAPI + '/pokemon?', params)
  .then((response) => response)
  .catch((error) => error.response)

  return apiResponse;
};

export const getPokemon = async (id) => {
  const apiResponse = await axios.get(process.env.REACT_APP_POKEAPI + '/pokemon/' + id)
  .then((response) => response)
  .catch((error) => error.response)

  return apiResponse;
};
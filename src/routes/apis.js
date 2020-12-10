import Axios from "axios"

export const getRandomQuote = async () => {
  const apiResponse = await Axios.get('https://api.quotable.io/random')
    .then((response) => response)
    .catch((error) => error.response)

    return apiResponse;
}


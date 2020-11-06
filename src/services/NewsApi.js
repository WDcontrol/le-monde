import { useFetch } from "../hooks/useFetch"

const baseUrl = `https://newsapi.org/v2`
const apiKey = `?apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`

export const GetNewsLeMonde = () => {
    return useFetch(`${baseUrl}/top-headlines${apiKey}&sources=le-monde`)
}

export const GetNewsDetails = (newsName, newsSources) => {
    const query = `&q=${newsName}`
    const source = `&sources=${newsSources}`
    return useFetch(`${baseUrl}/everything${apiKey}${query}${source}`)
}
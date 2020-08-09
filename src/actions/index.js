import { ADD_FETCHED_DATA, ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM, GET_DETAIL_POKEMON, ADD_FETCHED_DATA_POKEMON_TYPE, ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL } from './types.js';
import axios from 'axios';
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const apiUrlPokemonType = 'https://pokeapi.co/api/v2/type'

export const addFavoriteTerm =  (data) => {
  return {
    type: ADD_FAVORITE_TERM,
    payload: {
      name: data.name,
      description: data.description
    }
  }
}

export const removeFavoriteTerm = name => {
  return {
    type: REMOVE_FAVORITE_TERM,
    payload: {
      name
    }
  }
}


// FETCH URL SECTIONS

export const fetchDataPokemons = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
    .then(({data}) => {
      return data.results
    })
    .then(data => {
      dispatch({
          type: ADD_FETCHED_DATA,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

export const fetchDataPokemonType = () => {
  return (dispatch) => {
    return axios.get(apiUrlPokemonType)
    .then(({data}) => {
      return data.results
    })
    .then(data => {
      dispatch({
          type: ADD_FETCHED_DATA_POKEMON_TYPE,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

export const getDetailPokemon = (url) => {
  return (dispatch) => {
    axios.get(url)
    .then(({data}) => {
      return data
    })
    .then(data => {
      dispatch({
          type: GET_DETAIL_POKEMON,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

export const getDetailPokemonTypes = (url) => {
  return (dispatch) => {
    axios.get(url)
    .then(({data}) => {
      const pokemons = data.pokemon
      return pokemons.map(el => el.pokemon)
    })
    .then(data => {
      dispatch({
          type: ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}
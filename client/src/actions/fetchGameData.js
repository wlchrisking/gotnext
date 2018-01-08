import axios from 'axios';

export const fetchGameData = (zip) => {
  
  const request = axios.get() // game data located near hack reactor (or current location)

  // when FETCH_GAME_DATA is triggered, *** reducer will change the state in the store
  return {
    type: 'FETCH_GAME_DATA',
    payload: request
  }
};
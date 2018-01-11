import axios from 'axios';

export const fetchGameData = (data) => {
  
  return {
    type: 'FETCH_GAME_DATA',
    payload: data
  }
};
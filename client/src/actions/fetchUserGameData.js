import axios from 'axios';

export const fetchUserGameData = (username) => {
  
  // test
  const request = [{a:'a'} ,{b:'b'} ,{c:'c'}]
  
  // const request = axios.get() 

  return {
    type: 'FETCH_USER_GAME_DATA',
    payload: request
  }
};
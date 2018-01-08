import axios from 'axios';

export const fetchOption = (option) => {
    
  const request = option;
  
  return {
    type: 'OPTION_SELECTOR',
    payload: request
  }
};
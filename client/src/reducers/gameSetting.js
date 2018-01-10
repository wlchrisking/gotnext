export default function (state=null, action) {
  switch (action.type) {
    case 'GAMESETTING_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
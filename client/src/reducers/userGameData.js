export default function (state=null, action) {
  switch (action.type) {
    case 'FETCH_USER_GAME_DATA':
      return action.payload;
      break;
  }
  return state;
}
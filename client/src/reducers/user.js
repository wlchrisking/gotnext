export default function (state=null, action) {
  switch (action.type) {
    case 'USER_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
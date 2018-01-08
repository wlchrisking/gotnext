export default function (state=null, action) {
  switch (action.type) {
    case 'LOGIN_PAGE_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
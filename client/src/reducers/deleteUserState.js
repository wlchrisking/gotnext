export default function (state=null, action) {
  switch (action.type) {
    case 'USER_TO_BE_DELETED_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
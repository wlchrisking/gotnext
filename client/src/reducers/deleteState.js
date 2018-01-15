export default function (state=null, action) {
  switch (action.type) {
    case 'DELETE_CLICKED_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
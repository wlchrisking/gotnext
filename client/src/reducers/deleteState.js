export default function (state=false, action) {
  switch (action.type) {
    case 'DELETE_CLICKED_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
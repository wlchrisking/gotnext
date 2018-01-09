export default function (state=null, action) {
  switch (action.type) {
    case 'LOCATION_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
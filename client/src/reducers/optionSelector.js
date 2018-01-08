export default function (state='search', action) {
  switch (action.type) {
    case 'OPTION_SELECTOR':
      return action.payload;
      break;
  }
  return state;
}
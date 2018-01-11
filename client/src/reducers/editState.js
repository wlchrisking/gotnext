export default function (state=null, action) {
    switch (action.type) {
      case 'EDIT_SELECTOR':
        return action.payload;
        break;
    }
    return state;
  }
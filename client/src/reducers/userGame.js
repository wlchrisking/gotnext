export default function (state=null, action) {
    switch (action.type) {
      case 'USERGAMES_SELECTOR':
        return action.payload;
        break;
    }
    return state;
  }
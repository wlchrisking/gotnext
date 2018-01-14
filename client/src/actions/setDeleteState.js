export const setDeleteState = (deleteClicked) => {      
  return {
    type: 'DELETE_CLICKED_SELECTOR',
    payload: deleteClicked
  }
};
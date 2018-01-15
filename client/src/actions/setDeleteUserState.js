export const setDeleteUserState = (userToBeDeleted) => {      
  return {
    type: 'USER_TO_BE_DELETED_SELECTOR',
    payload: userToBeDeleted
  }
};
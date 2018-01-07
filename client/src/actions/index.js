
// selectUser is NOT an action - just an action creator
export const selectUser = (user) => {
  console.log('you clicked on user: ', user.first);

  // ACTUAL action - action is a returned object with a type and a payload
  return {
    type: 'USER_SELECTED', //action syntax
    payload: user
  }
};
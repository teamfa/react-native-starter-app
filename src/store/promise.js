function warn(error) {
  console.error(error.message || error);
  throw error; // To let the caller handle the rejection
}

export default store => {
  return dispatch => {
    return action => {
      if (typeof action.then === 'function') {
        return action.then(dispatch, warn).catch(warn);
      }
      return dispatch(action);
      // return typeof action.then === 'function' ? action.then(dispatch, warn).catch(warn) : dispatch(action);
    };
  };
};

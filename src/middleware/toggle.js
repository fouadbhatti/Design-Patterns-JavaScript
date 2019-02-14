export const toggleMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === 'TOGGLE') {
    switch (action.payload) {
    case 'js':
      const js = getState()['js'];

      return dispatch({
        type: 'TOGGLE_JS',
        payload: js === 'es5' ? 'es6' : 'es5'
      });

    case 'mode':
      const mode = getState()['mode'];

      return dispatch({
        type: 'TOGGLE_MODE',
        payload: mode === 'dark' ? 'light' : 'dark'
      });
    }
  }

  next(action);
};
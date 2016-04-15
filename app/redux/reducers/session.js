import * as t from '../constants/ActionTypes';

const initialState = { token: '', ecode: 0 };

export default function session(state = initialState, action) {
  switch (action.type) {
    case t.SESSION_CREATE:
      return { ...state, loading: true };

    case t.SESSION_CREATE_SUCCESS:
      return { ...state, loading: false, ecode: action.result.ecode, ...action.result.data };

    case t.SESSION_CREATE_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}

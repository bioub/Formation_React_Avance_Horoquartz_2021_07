import { getAll } from './api/users';
import { USER_FETCH, USER_FETCH_SUCCESS } from './constants';


export function userFetchRequest() {
  return async (dispatch) => {
    dispatch(userFetch());
    const users = await getAll();
    dispatch(userFetchSuccess(users));
  }
}

export function userFetch() {
  return {
    type: USER_FETCH,
  };
}

export function userFetchSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}

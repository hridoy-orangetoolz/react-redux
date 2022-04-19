// import * as ACTION from "../constants/counterActionTypes";
import * as ACTION from "../constants/counterActionTypes";

export const updateCount = (payload) => ({
  type: ACTION.UPDATE_COUNT,
  payload: payload,
});

export const fetchUsers = (payload, callback) => ({
  type: ACTION.FETCH_USERS,
  payload: { payload, callback },
});

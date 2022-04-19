// import * as ACTION from "../constants/counterActionTypes";
import * as ACTION from "../constants/counterActionTypes";

export const updateCount = (payload) => ({
  type: ACTION.UPDATE_COUNT,
  payload: payload,
});

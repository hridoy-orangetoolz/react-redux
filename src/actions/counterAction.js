// import * as ACTION from "../constants/counterActionTypes";
import * as ACTION from "../constants/counterActionTypes";

export const incrementValue = (payload, callback) => ({
  type: ACTION.INCREMENT_COUNT,
  payload: { payload, callback },
});

export const decrementValue = (payload, callback) => ({
  type: ACTION.DECREMENT_COUNT,
  payload: { payload, callback },
});

import * as ACTION from "../constants/counterActionTypes";

const initialState = {
  count: 0,
  users: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_COUNT:
      return { ...state, count: action.payload };
    case ACTION.ADD_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default counterReducer;

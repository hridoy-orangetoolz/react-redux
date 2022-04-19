import { sendRequest } from "./rootApi";
import API from "./apiList";

export const fetchUsers = async (payload) => {
  return sendRequest("GET", API.users, payload);
};

export const getTodos = async (payload) => {
  return sendRequest("GET", API.todos, payload);
};

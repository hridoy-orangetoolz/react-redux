import { all } from "redux-saga/effects";
import counterMiddleware from "./counterMiddleware";

export default function* rootMiddleware() {
  yield all([counterMiddleware()]);
}

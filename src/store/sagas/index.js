import { all } from "redux-saga/effects";
import * as characters from "./characters";

function* Sagas() {
  yield all([characters.watcherSaga()]);
}

export default Sagas;

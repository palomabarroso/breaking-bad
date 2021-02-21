import { put, takeLatest } from "redux-saga/effects";
import { CharactersTypes, CharactersActions } from "store/ducks/characters";
import { API } from "services/api";
import { CHARACTERS } from "utils/constants/endpoints";

function* requestCharacters() {
  try {
    const response = yield API({
      method: "get",
      url: `${CHARACTERS}`,
    });

    if (response.status !== 200) {
      throw response;
    }

    yield put(CharactersActions.requestCharactersSuccess(response.data));
  } catch ({ response }) {
    yield put(CharactersActions.requestCharactersFailure(response.data));
  }
}

function* requestDetailsCharacter({ id }) {
  try {
    const response = yield API({
      method: "get",
      url: `${CHARACTERS}/${id}`,
    });

    if (response.status !== 200) {
      throw response;
    }

    yield put(CharactersActions.requestDetailsCharacterSuccess(response.data));
  } catch ({ response }) {
    yield put(CharactersActions.requestDetailsCharacterFailure(response.data));
  }
}

export function* watcherSaga() {
  yield takeLatest(CharactersTypes.REQUEST_CHARACTERS, requestCharacters);
  yield takeLatest(CharactersTypes.REQUEST_DETAILS_CHARACTER, requestDetailsCharacter);
}

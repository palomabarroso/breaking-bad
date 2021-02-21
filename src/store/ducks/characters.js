import { createActions, createReducer } from "reduxsauce";
import {
  REQUEST_NOT_STARTED,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_RESOLVED,
} from "utils/constants/request";

const INITIAL_STATE = {
  characters: {
    requestStatus: REQUEST_NOT_STARTED,
    requestResponse: [],
  },
  detailsCharacter: {
    requestStatus: REQUEST_NOT_STARTED,
    requestResponse: {},
  },
};

export const { Types: CharactersTypes, Creators: CharactersActions } = createActions({
  requestCharacters: [],
  requestCharactersSuccess: ["response"],
  requestCharactersFailure: ["response"],

  requestDetailsCharacter: ["id"],
  requestDetailsCharacterSuccess: ["response"],
  requestDetailsCharacterFailure: ["response"],
});

const requestCharacters = (state) => ({
  ...state,
  characters: {
    requestStatus: REQUEST_PENDING,
  },
});

const requestCharactersSuccess = (state, { response }) => ({
  ...state,
  characters: {
    requestResponse: response,
    requestStatus: REQUEST_RESOLVED,
  },
});

const requestCharactersFailure = (state, { response }) => ({
  ...state,
  characters: {
    requestResponse: response,
    requestStatus: REQUEST_REJECTED,
  },
});

const requestDetailsCharacter = (state) => ({
  ...state,
  detailsCharacters: {
    requestStatus: REQUEST_PENDING,
  },
});

const requestDetailsCharacterSuccess = (state, { response }) => ({
  ...state,
  detailsCharacters: {
    requestResponse: response,
    requestStatus: REQUEST_RESOLVED,
  },
});

const requestDetailsCharacterFailure = (state, { response }) => ({
  ...state,
  detailsCharacters: {
    requestResponse: response,
    requestStatus: REQUEST_REJECTED,
  },
});

export default createReducer(INITIAL_STATE, {
  [CharactersTypes.REQUEST_CHARACTERS]: requestCharacters,
  [CharactersTypes.REQUEST_CHARACTERS_SUCCESS]: requestCharactersSuccess,
  [CharactersTypes.REQUEST_CHARACTERS_FAILURE]: requestCharactersFailure,

  [CharactersTypes.REQUEST_DETAILS_CHARACTER]: requestDetailsCharacter,
  [CharactersTypes.REQUEST_DETAILS_CHARACTER_SUCCESS]: requestDetailsCharacterSuccess,
  [CharactersTypes.REQUEST_DETAILS_CHARACTER_FAILURE]: requestDetailsCharacterFailure,
});

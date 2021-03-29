import { Action, createReducer, on } from '@ngrx/store';
import { BaseResponse } from '../../../core/models/base-response'
import { Character, Film, Spiece, CharactersFilter } from '../../models';
import * as characterActions from '../actions/character.actions'

export const characterListFeatureKey = 'characterList';

export interface State {
  characters: BaseResponse<Character>
  loading: boolean;

  films: BaseResponse<Film>;
  species: BaseResponse<Spiece>;

  filter: CharactersFilter;
}

export const initialState: State = {
  characters: null,
  loading: false,

  species: null,
  films: null,

  filter: {
    spiece: 'All',
    film: 'All',
    birthYear: 600,
  }
};


export const characterListReducer = createReducer(
  initialState,
  on(characterActions.loadCharacters, state => {
    return { ...state, loading: true };
  }),
  on(characterActions.loadCharactersFailure, state => {
    return { ...state, loading: false };
  }),
  on(characterActions.loadCharactersSuccess, (state, { data }) => {
    return { ...state, characters: data, loading: false };
  }),

  on(characterActions.loadFiltersSuccess, (state, { films, species }) => {
    return { ...state, films, species };
  }),

  on(characterActions.filtersChange, (state, { filter }) => {
    return { ...state, filter };
  }),
  on(characterActions.clearList, (state) => {
    return {
      ...state,
      ...initialState,
      filter: { ... initialState.filter }
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return characterListReducer(state, action);
}

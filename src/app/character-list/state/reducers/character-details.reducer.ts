import { Action, createReducer, on } from '@ngrx/store';
import { Character } from '../../models';
import * as characterDetailsActions from '../actions/character-details.actions'

export const characterDetailsFeatureKey = 'characterDetails';

export interface State {
  details: Character;
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  details: null,
  loading: false,
  loaded: false,
};


export const characterDetailsReducer = createReducer(
  initialState,
  on(characterDetailsActions.loadCharacterDetails, state => {
    return { ...state, loading: true };
  }),
  on(characterDetailsActions.loadCharacterDetailsFailure, state => {
    return { ...state, loading: false };
  }),
  on(characterDetailsActions.loadCharacterDetailsSuccess, (state, { data }) => {
    return { ...state, details: data, loading: false, loaded: true };
  }),
  on(characterDetailsActions.clearDetails, (state) => {
    return { ...state, ...initialState };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return characterDetailsReducer(state, action);
}

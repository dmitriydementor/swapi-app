import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, characterListFeatureKey } from '../reducers';

const selectCharacterListState = createFeatureSelector<State>(characterListFeatureKey);

export const selectCharacterDetails = createSelector(
  selectCharacterListState,
  state => state.characterDetails.details
);

export const selectCharacterDetailsLoading = createSelector(
  selectCharacterListState,
  state => state.characterDetails.loading,
);

export const selectCharacterDetailsLoaded = createSelector(
  selectCharacterListState,
  state => state.characterDetails.loaded,
);

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, characterListFeatureKey } from '../reducers';

const selectCharacterListState = createFeatureSelector<State>(characterListFeatureKey);

export const selectCharacterList = createSelector(
  selectCharacterListState,
  state => state.characterList.characters?.results
);

export const selectCharacterListLoading = createSelector(
  selectCharacterListState,
  state => state.characterList.loading
);

export const selectFilms = createSelector(
  selectCharacterListState,
  state => state.characterList.films?.results
);

export const selectSpecies = createSelector(
  selectCharacterListState,
  state => state.characterList.species?.results
);

export const selectFilter = createSelector(
  selectCharacterListState,
  state => state.characterList.filter
);

export const selectNextPage = createSelector(
  selectCharacterListState,
  state => state.characterList.characters?.next
);

export const selectPreviousPage = createSelector(
  selectCharacterListState,
  state => state.characterList.characters?.previous
);

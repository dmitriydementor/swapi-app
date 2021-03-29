import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as characterListSelectors from '../state/selectors/character-list.selectors';
import * as characterDetailsSelectors from '../state/selectors/character-details.selectors';
import * as characterActions from '../state/actions/character.actions';
import * as characterDetailsActions from '../state/actions/character-details.actions';
import { State } from '../state/reducers'
import { CharactersFilter } from '../models';

@Injectable()
export class CharactersStoreManagerService {
  characters$ = this.store.pipe(select(characterListSelectors.selectCharacterList));
  charactersLoading$ = this.store.pipe(select(characterListSelectors.selectCharacterListLoading));

  films$ = this.store.pipe(select(characterListSelectors.selectFilms));
  species$ = this.store.pipe(select(characterListSelectors.selectSpecies));
  filter$ = this.store.pipe(select(characterListSelectors.selectFilter));

  nextPage$ = this.store.pipe(select(characterListSelectors.selectNextPage));
  previousPage$ = this.store.pipe(select(characterListSelectors.selectPreviousPage));

  characterDetailsLoading$ = this.store.pipe(select(characterDetailsSelectors.selectCharacterDetailsLoading));
  characterDetailsLoaded$ = this.store.pipe(select(characterDetailsSelectors.selectCharacterDetailsLoaded));
  characterDetails$ = this.store.pipe(select(characterDetailsSelectors.selectCharacterDetails));

  constructor(
    private store: Store<State>
  ) { }

  loadCharacters(page?: number) {
    this.store.dispatch(characterActions.loadCharacters({ page }));
  }

  loadFilters() {
    this.store.dispatch(characterActions.loadFilters());
  }

  onFilterChange(filter: CharactersFilter) {
    this.store.dispatch(characterActions.filtersChange({ filter }));
  }

  nextPage() {
    this.store.dispatch(characterActions.nextPage())
  }

  previousPage() {
    this.store.dispatch(characterActions.previousPage())
  }

  clearList() {
    this.store.dispatch(characterActions.clearList())
  }

  loadDetails(id: number | string) {
    this.store.dispatch(characterDetailsActions.loadCharacterDetails({ id }))
  }

  clearDetails() {
    this.store.dispatch(characterDetailsActions.clearDetails())
  }
}

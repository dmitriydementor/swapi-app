import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { CharactersStoreManagerService, PeopleProviderService } from '../../services';

import * as characterActions from '../actions/character.actions';

@Injectable()
export class CharacterListEffects {
  constructor(
    private actions$: Actions,
    private peopleProviderService: PeopleProviderService,
    private dataManagerService: CharactersStoreManagerService,
  ) {}

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(characterActions.loadCharacters),
    switchMap(({ page }) => {
      return this.peopleProviderService.getPeople(page).pipe(
        switchMap(res => {
          return of(characterActions.loadCharactersSuccess({ data: res }));
        }),
        catchError(err => {
          return of(characterActions.loadCharactersFailure({ error: err }));
        })
      )
    })
  ));

  loadFilters$ = createEffect(() => this.actions$.pipe(
    ofType(characterActions.loadFilters),
    switchMap(() => {
      return forkJoin([
        this.peopleProviderService.getFilms(),
        this.peopleProviderService.getSpecies(),
      ]).pipe(
        switchMap(([films, species]) => {
          return of(characterActions.loadFiltersSuccess({ films, species }))
        })
      )
    })
  ));

  nextPage$ = createEffect(() => this.actions$.pipe(
    ofType(characterActions.nextPage),
    withLatestFrom(this.dataManagerService.nextPage$),
    switchMap(([_, nextPage]) => {
      const page = nextPage.slice(nextPage.length - 1);

      return of(characterActions.loadCharacters({ page: parseInt(page, 10) }));
    })
  ));

  previousPage$ = createEffect(() => this.actions$.pipe(
    ofType(characterActions.previousPage),
    withLatestFrom(this.dataManagerService.previousPage$),
    switchMap(([_, previousPage]) => {
      const page = previousPage.slice(previousPage.length - 1);

      return of(characterActions.loadCharacters({ page: parseInt(page, 10) }));
    })
  ));
}

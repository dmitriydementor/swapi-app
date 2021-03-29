import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PeopleProviderService } from '../../services';

import * as characterDetailsActions from '../actions/character-details.actions';

@Injectable()
export class CharacterDetailsEffects {
  constructor(
    private actions$: Actions,
    private peopleProviderService: PeopleProviderService,
  ) {}

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(characterDetailsActions.loadCharacterDetails),
    switchMap(({ id }) => {
      return this.peopleProviderService.getCharacter(id).pipe(
        switchMap(res => {
          return of(characterDetailsActions.loadCharacterDetailsSuccess({ data: res }));
        }),
        catchError(err => {
          return of(characterDetailsActions.loadCharacterDetailsFailure({ error: err }));
        })
      )
    })
  ));
}

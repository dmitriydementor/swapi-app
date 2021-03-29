import { createAction, props } from '@ngrx/store';

import { Character } from '../../models';

export const loadCharacterDetails = createAction(
  '[Character Details] Load Character Details',
  props<{ id: number | string }>()
);

export const loadCharacterDetailsSuccess = createAction(
  '[Character Details] Load Character Details Success',
  props<{ data: Character }>()
);

export const loadCharacterDetailsFailure = createAction(
  '[Character Details] Load Character Details Failure',
  props<{ error: any }>()
);

export const clearDetails = createAction(
  '[Character Details] Clear Details',
);

import { createAction, props } from '@ngrx/store';

import { Character, Film, Spiece, CharactersFilter } from '../../models';
import { BaseResponse } from '../../../core/models/base-response';

export const loadCharacters = createAction(
  '[Character] Load Characters',
  props<{ page?: number }>()
);

export const loadCharactersSuccess = createAction(
  '[Character] Load Characters Success',
  props<{ data: BaseResponse<Character> }>()
);

export const loadCharactersFailure = createAction(
  '[Character] Load Characters Failure',
  props<{ error: any }>()
);

export const loadFilters = createAction(
  '[Character] Load Filters'
);

export const loadFiltersSuccess = createAction(
  '[Character] Load Filters Success',
  props<{ films: BaseResponse<Film>; species: BaseResponse<Spiece>; }>()
);

export const loadFiltersFailure = createAction(
  '[Character] Load Filters Failure',
  props<{ error: any }>()
);

export const filtersChange = createAction(
  '[Character] Filters Change',
  props<{ filter: CharactersFilter }>()
);

export const previousPage = createAction(
  '[Character] Previous Page',
);

export const nextPage = createAction(
  '[Character] Next Page',
);

export const clearList = createAction(
  '[Character] Clear List',
);

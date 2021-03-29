import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCharacterList from './character-list.reducer';
import * as fromCharacterDetails from './character-details.reducer';

export const characterListFeatureKey = 'characterList';

export interface State {
  [fromCharacterList.characterListFeatureKey]: fromCharacterList.State;
  [fromCharacterDetails.characterDetailsFeatureKey]: fromCharacterDetails.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCharacterList.characterListFeatureKey]: fromCharacterList.reducer,
  [fromCharacterDetails.characterDetailsFeatureKey]: fromCharacterDetails.reducer,
};

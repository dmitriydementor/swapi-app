import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { components } from './components';
import { StoreModule } from '@ngrx/store';
import * as fromCharacterList from './state/reducers';
import { services } from './services';
import { EffectsModule } from '@ngrx/effects';
import { CharacterListEffects } from './state/effects/character-list.effects';
import { pipes } from './pipes'
import { SharedModule } from '../shared/shared.module';
import { containers } from './containers';
import { CharacterDetailsEffects } from './state/effects/character-details.effects';
import { CharacterDetailsResolver } from './resolvers/character-details.resolver';

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...containers,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterListRoutingModule,
    StoreModule.forFeature(
      fromCharacterList.characterListFeatureKey,
      fromCharacterList.reducers,
    ),
    EffectsModule.forFeature([CharacterListEffects, CharacterDetailsEffects])
  ],
  providers: [
    ...services,
    CharacterDetailsResolver,
  ]
})
export class CharacterListModule { }

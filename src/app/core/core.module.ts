import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { components } from './components';
import { reducers, metaReducers } from './state/reducers';

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,

    HttpClientModule,
    RouterModule,
    SharedModule,

    // store
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    ...components,
  ]
})
export class CoreModule { }

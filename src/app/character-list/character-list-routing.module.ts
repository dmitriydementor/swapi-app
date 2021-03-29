import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListContainerComponent, CharacterDetailContainerComponent } from './containers';
// import { CharacterDetailsGuard } from './guards/character-details.guard';
import { CharacterDetailsResolver } from './resolvers/character-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharacterListContainerComponent,
  },
  {
    path: ':id',
    component: CharacterDetailContainerComponent,
    // canActivate: [CharacterDetailsGuard],
    resolve: {
      details: CharacterDetailsResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }

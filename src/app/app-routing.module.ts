import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () => import('./character-list/character-list.module').then(m => m.CharacterListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

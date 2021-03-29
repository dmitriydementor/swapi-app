import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersStoreManagerService } from '../services';

@Injectable()
export class CharacterDetailsGuard implements CanActivate {
  constructor(
    private charactersStoreManagerService: CharactersStoreManagerService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('guard');
    return this.charactersStoreManagerService.characterDetailsLoaded$;
  }

}

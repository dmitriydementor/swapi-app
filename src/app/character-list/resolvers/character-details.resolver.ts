import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, switchMap, take } from 'rxjs/operators';
import { Character } from '../models';
import { CharactersStoreManagerService } from '../services';

@Injectable()
export class CharacterDetailsResolver implements Resolve<Character> {
  constructor(
    private charactersStoreManagerService: CharactersStoreManagerService,
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Character> {
    const id = route.params.id;
    this.charactersStoreManagerService.loadDetails(id);
    return this.charactersStoreManagerService.characterDetailsLoaded$.pipe(
      filter(l => l),
      switchMap(() => this.charactersStoreManagerService.characterDetails$),
      take(1),
    ).toPromise();
  }
}

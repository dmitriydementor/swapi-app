import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CharactersFilter } from '../../models';
import { CharactersStoreManagerService } from '../../services';

@Component({
  selector: 'app-character-list-container',
  templateUrl: './character-list-container.component.html',
  styleUrls: ['./character-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListContainerComponent implements OnInit, OnDestroy {

  charactersLoading$ = this.storeManager.charactersLoading$;
  characters$ = this.storeManager.characters$;

  films$ = this.storeManager.films$;
  species$ = this.storeManager.species$;
  filter$ = this.storeManager.filter$;

  previousPage$ = this.storeManager.previousPage$;
  nextPage$ = this.storeManager.nextPage$;

  constructor(
    private storeManager: CharactersStoreManagerService,
  ) { }

  ngOnInit(): void {
    this.storeManager.loadCharacters();
    this.storeManager.loadFilters();
  }

  onFilterChange(filter: CharactersFilter) {
    this.storeManager.onFilterChange(filter);
  }

  onPrevious() {
    this.storeManager.previousPage();

  }
  onNext() {
    this.storeManager.nextPage();
  }

  ngOnDestroy() {
    this.storeManager.clearList();
  }

}

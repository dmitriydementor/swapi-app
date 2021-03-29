import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models';
import { CharactersStoreManagerService } from '../../services';

@Component({
  selector: 'app-character-detail-container',
  templateUrl: './character-detail-container.component.html',
  styleUrls: ['./character-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailContainerComponent implements OnInit, OnDestroy {
  details: Character;

  constructor(
    private route: ActivatedRoute,
    private charactersStoreManagerService: CharactersStoreManagerService,
  ) { }

  ngOnInit(): void {
    this.details = this.route.snapshot.data.details;
  }
  ngOnDestroy() {
    this.charactersStoreManagerService.clearDetails();
  }

}

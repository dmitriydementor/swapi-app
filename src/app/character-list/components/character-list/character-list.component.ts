import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Character, CharactersFilter, Film, Spiece } from '../../models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {
  @Input() charactersLoading: boolean = false;
  @Input() characters: Character[] = [];
  @Input() filter: CharactersFilter;

  @Input() films: Film[] = [];
  @Input() species: Spiece[] = [];

  @Input() nextPage: string
  @Input() previousPage: string;
  @Output() onPrevious = new EventEmitter();
  @Output() onNext = new EventEmitter();

  previous() {
    this.onPrevious.emit();
  }

  next() {
    this.onNext.emit();
  }
}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from '../../models';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterItemComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}

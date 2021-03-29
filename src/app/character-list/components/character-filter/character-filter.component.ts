import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Film, Spiece, CharactersFilter } from '../../models';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFilterComponent implements OnInit, OnDestroy {
  @Input() films: Film[] = [];
  @Input() species: Spiece[] = [];

  @Output() filterChange = new EventEmitter<CharactersFilter>();

  form: FormGroup = this.buildForm();
  formSub: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(400)).subscribe(val => this.filterChange.emit(val));
  }

  buildForm() {
    return this.fb.group({
      film: ['All'],
      spiece: ['All'],
      birthYear: [600],
    });
  }

  ngOnDestroy() {
    this.formSub?.unsubscribe();
  }
}

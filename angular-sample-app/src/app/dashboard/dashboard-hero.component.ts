import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model/hero';

@Component({
  selector: 'dashboard-hero',
  template: `
    <button type="button" (click)="click()" class="hero">
      {{hero.name | uppercase}}
    </button>
  `,
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
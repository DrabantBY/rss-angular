import { Component, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { StoreService } from '../shared/services/store.service';

import { FilterService } from '../shared/services/filter.service';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, FilterPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  readonly #storeService = inject(StoreService);
  readonly #filterService = inject(FilterService);

  get cards() {
    return this.#storeService.cards;
  }

  get words() {
    return this.#filterService.words;
  }
}

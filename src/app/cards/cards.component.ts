import { Component, WritableSignal, inject, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { StoreService } from '../shared/services/store.service';
import { CardInterface } from './types/card.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  readonly #storeService = inject(StoreService);
  cards: WritableSignal<CardInterface[]> = signal(this.#storeService.cards);
}

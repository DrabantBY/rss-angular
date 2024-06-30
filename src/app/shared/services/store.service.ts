import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import data from '../../../response.json';
import { ResponseInterface } from '../types/response.interface';
import { CardInterface } from './../../cards/types/card.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly #store: WritableSignal<ResponseInterface> = signal(data);

  readonly #search: WritableSignal<boolean> = signal(false);

  readonly #cards: Signal<CardInterface[]> = computed(() => {
    const { items } = this.#store();
    const list: CardInterface[] = items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      ...item.snippet.thumbnails.medium,
      ...item.statistics,
    }));

    return this.#search() ? list : [];
  });

  get cards() {
    return this.#cards;
  }

  set search(value: boolean) {
    console.log(value, 'asdfasdfsa');
    this.#search.set(value);
  }
}

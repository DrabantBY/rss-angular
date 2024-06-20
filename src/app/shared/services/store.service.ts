import { CardInterface } from './../../cards/types/card.interface.d';
import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import data from '../../../response.json';
import { ResponseInterface } from '../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  #store: WritableSignal<ResponseInterface> = signal(data);

  #cards: Signal<CardInterface[]> = computed(() => {
    const { items } = this.#store();
    const list: CardInterface[] = items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      url: item.snippet.thumbnails.medium.url,
      ...item.statistics,
    }));

    return list;
  });

  get cards() {
    return this.#cards();
  }
}

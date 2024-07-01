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
import { SortFormInterface } from '../types/sort-form.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly #store: WritableSignal<ResponseInterface> = signal(data);
  readonly #search: WritableSignal<boolean> = signal(false);
  readonly #sort: WritableSignal<SortFormInterface> = signal({
    views: null,
    date: null,
  });

  readonly #cards: Signal<CardInterface[]> = computed(() => {
    const { items } = this.#store();
    const list: CardInterface[] = items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      ...item.snippet.thumbnails.medium,
      ...item.statistics,
    }));

    const { views, date } = this.#sort();

    if (views) {
      if (views === 'asc') {
        list.sort((a, b) => Number(a.viewCount) - Number(b.viewCount));
      }

      if (views === 'desc') {
        list.sort((a, b) => Number(b.viewCount) - Number(a.viewCount));
      }
    }

    if (date) {
      if (date === 'asc') {
        list.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
        );
      }

      if (date === 'desc') {
        list.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      }
    }

    return this.#search() ? list : [];
  });

  set search(value: boolean) {
    this.#search.set(value);
  }

  set sort(value: SortFormInterface) {
    this.#sort.set(value);
  }

  get cards() {
    return this.#cards;
  }
}

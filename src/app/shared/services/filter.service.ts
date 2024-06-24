import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  readonly #words: WritableSignal<string> = signal('');

  get words() {
    return this.#words();
  }

  set words(words: string) {
    this.#words.set(words);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { CardInterface } from './../../cards/types/card.interface.d';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(cards: CardInterface[], words: string): CardInterface[] {
    if (!words) {
      return cards;
    }
    return cards.filter((card) =>
      card.title.toLowerCase().includes(words.toLowerCase())
    );
  }
}

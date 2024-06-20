import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[appPublished]',
  standalone: true,
})
export class PublishedDirective {
  readonly appPublished = input.required<string>();

  @HostBinding('style.borderBottom')
  get border() {
    const publishedDate = new Date(this.appPublished()).getTime();
    const currentDate = Date.now();
    const timeSpan = Math.floor((currentDate - publishedDate) / (3600 * 24000));

    switch (true) {
      case timeSpan < 7:
        return '0.4rem solid blue';
      case timeSpan < 31:
        return '0.4rem solid green';
      case timeSpan < 183:
        return '0.4rem solid orange';
      default:
        return '0.4rem solid red';
    }
  }
}

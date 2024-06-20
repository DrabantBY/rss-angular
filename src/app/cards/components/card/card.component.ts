import { Component, InputSignal, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import {
  MatCard,
  MatCardImage,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PublishedDirective } from '../../directives/published.directive';
import { CardInterface } from '../../types/card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatBadge,
    MatButtonModule,
    PublishedDirective,
  ],

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly card: InputSignal<CardInterface> = input.required<CardInterface>();
}

import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardImage,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CardInterface } from '../../types/card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatBadge,
    MatButtonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<CardInterface>();
}

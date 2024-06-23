import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  readonly #form = inject(FormBuilder);
  readonly filterForm = this.#form.group({
    words: ['', { updateOn: 'change' }],
  });
}

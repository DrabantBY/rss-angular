import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  readonly #form = inject(FormBuilder);
  readonly #filterService = inject(FilterService);

  readonly filterForm = this.#form.group({
    words: ['', { updateOn: 'change' }],
  });

  onWordsChange() {
    this.#filterService.words = this.filterForm.value?.words ?? '';
  }
}

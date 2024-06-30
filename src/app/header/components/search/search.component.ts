import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { StoreService } from '../../../shared/services/store.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatButton],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  readonly #formBuilder = inject(FormBuilder);
  readonly #storeService = inject(StoreService);

  readonly searchForm = this.#formBuilder.group({
    search: ['', { updateOn: 'submit' }],
  });

  onSubmit() {
    this.#storeService.search = !this.searchForm.value?.search;
  }
}

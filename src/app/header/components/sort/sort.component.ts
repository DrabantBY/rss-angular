import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { StoreService } from '../../../shared/services/store.service';
import {
  SortFormInterface,
  SortFieldType,
} from '../../../shared/types/sort-form.interface';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatSelect, MatOption],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  readonly #storeService = inject(StoreService);
  readonly #formBuilder = inject(FormBuilder);
  readonly sortForm = this.#formBuilder.group<SortFormInterface>({
    views: null,
    date: null,
  });

  onChangeDate() {
    const date: SortFieldType = this.sortForm.value?.date ?? null;
    this.#storeService.sort = { date, views: null };
  }

  onChangeViews() {
    const views: SortFieldType = this.sortForm.value?.views ?? null;
    this.#storeService.sort = { views, date: null };
  }
}

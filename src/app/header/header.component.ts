import { Component, WritableSignal, signal } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { LogoComponent } from './components/logo/logo.component';
import { SettingsBtnComponent } from './components/settings-btn/settings-btn.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    LogoComponent,
    SettingsBtnComponent,
    UserMenuComponent,
    FilterComponent,
    SearchComponent,
    SortComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  #isOpenFilterList: WritableSignal<boolean> = signal(false);

  get isOpenFilterList() {
    return this.#isOpenFilterList();
  }

  toggleFilterList() {
    this.#isOpenFilterList.update((value) => !value);
  }
}

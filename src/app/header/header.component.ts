import { Component, WritableSignal, signal } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { LogoComponent } from './components/logo/logo.component';
import { SettingsBtnComponent } from './components/settings-btn/settings-btn.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    LogoComponent,
    SettingsBtnComponent,
    UserMenuComponent,
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

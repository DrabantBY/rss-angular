import { Component, input } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-settings-btn',
  standalone: true,
  imports: [MatMiniFabButton, MatIcon],
  templateUrl: './settings-btn.component.html',
  styleUrl: './settings-btn.component.scss',
})
export class SettingsBtnComponent {
  isOpenFilterList = input.required();
}

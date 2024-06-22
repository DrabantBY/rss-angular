import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [MatFabButton, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {}

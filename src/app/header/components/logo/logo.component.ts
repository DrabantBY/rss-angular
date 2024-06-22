import { Component } from '@angular/core';
import { MatMiniFabAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [MatMiniFabAnchor, MatIcon],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {}

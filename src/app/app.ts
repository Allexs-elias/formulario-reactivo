import { Component } from '@angular/core';
import { RegistroTemplate } from './registro-template/registro-template';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
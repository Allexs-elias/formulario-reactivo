import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-template.html',
  styleUrl: './registro-template.css'
})
export class RegistroTemplate {
  usuario = {
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    contrasena: ''
  };

  registrado = false;

  registrar(formulario: NgForm): void {
    if (formulario.invalid) {
      formulario.form.markAllAsTouched();
      return;
    }

    this.registrado = true;
  }
}
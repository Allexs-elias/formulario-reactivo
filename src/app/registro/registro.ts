import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    apellidos: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    contrasena: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    })
  });

  datosRegistrados: {
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
  } | null = null;

  enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const datos = this.formulario.getRawValue();

    this.datosRegistrados = {
      nombre: datos.nombre,
      apellidos: datos.apellidos,
      correo: datos.correo,
      telefono: datos.telefono
    };
  }
}
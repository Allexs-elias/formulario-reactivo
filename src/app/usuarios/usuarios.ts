import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {
  private http = inject(HttpClient);

  usuarios = signal<Usuario[]>([]);
  cargando = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando.set(true);
    this.error.set('');

    this.http.get<Usuario[]>(
      'https://jsonplaceholder.typicode.com/users'
    ).subscribe({
      next: (datos) => {
        this.usuarios.set(datos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(
          'No se pudieron cargar los usuarios. Intenta de nuevo.'
        );
        this.cargando.set(false);
      }
    });
  }
}
import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Productos } from 'src/app/models/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  esAutenticado: boolean = false;
  usuarioRegistrado: boolean = false;
  coleccionProductos: Productos[] = [];
  mostrarModal: boolean = false;

  constructor(
    public servicioAuth: AuthService,
    public servicioCrud: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener productos
    this.servicioCrud.obtenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;
    });

    // Verificar autenticación
    const token = this.servicioAuth.obtenerToken();
    if (token) {
      this.esAutenticado = true;
      this.servicioAuth.obtenerUid().then(uid => {
        if (uid) {
          this.servicioAuth.obtenerRol(uid).subscribe(rol => {
            if (rol === 'usuario') {
              this.usuarioRegistrado = true;
            }
          });
        }
      });
    }
  }

  redirigirAProductos(): void {
    this.router.navigate(['/productos']);
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
  

  }
  
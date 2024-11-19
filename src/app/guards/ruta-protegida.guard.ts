import { CanActivateFn } from '@angular/router';
// inject -> inyeccion de servicios
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

//operadores tipo "observables"
import { map, switchMap, of, from } from 'rxjs'

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  
  //inyectamos/ instanciamos servicio de autentificacion en el guardian (de forma local)
  //Este servicio es responsable de manejar la lógica de autenticación y autorización, como verificar el UID del usuario o su rol.
  const servicioAuth = inject(AuthService); 


  //inyectamos/instaciamos servicio de rutas de forma local
  //permite navegar entre rutas o generar redirecciones.
  const servicioRutas = inject(Router);

  //especificamos cual es el rol que va a esperar el guardian para activarse
  const rolEsperado = 'admin';


  //FROM-> convierte una promesa en observable 

  //este toma el uid del usuario y retona segun el rol
  return from(servicioAuth.obtenerUid()).pipe(
    switchMap(uid =>{
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol=>{
            if(rol=== rolEsperado){
              //si coincide el rol esperado, damos acceso al usuario
              console.log("usuario verificado como administrador")

              //el usuario al ser admin lo retornamos a 'admin'
              return true;
            }
            else{

              //denegamos el accceso al usuario 
              return false;
            }
          })
        )
      }
      else{
        console.log("usuario no validado. Permisos insuficintes")


//redireccionamos acceso a inicio para usuarios no validados
// Usuarios sinpermisos: visitante o NO registrado
        return of(servicioRutas.createUrlTree(['/inicio']))
      }
    })
  )
};


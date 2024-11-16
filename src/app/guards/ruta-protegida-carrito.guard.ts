import { CanActivateFn } from '@angular/router';
// inject -> inyeccion de servicios
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';


//operadores tipo "observables"
import { map, switchMap, of, from } from 'rxjs'

export const rutaProtegidaCarritoGuard: CanActivateFn = (route, state) => {
 //inyectamos/ instanciamos servicio de autentificacion en el guardian (de forma local)
 const servicioAuth = inject(AuthService);
 //inyectamos/instaciamos servicio de rutas de forma local
 const servicioRutas = inject(Router);

 //especificamos cual es el rol que va a esperar el guardian para activarse
 const rolEsperado = 'usuario';


 //FROM-> convierte una promesa en observable 
 //
 return from(servicioAuth.obtenerUid()).pipe(
   switchMap(uid =>{
     if (uid) {
       return servicioAuth.obtenerRol(uid).pipe(
         map(rol=>{
           if(rol=== rolEsperado){
             //si coincide el rol esperado, damos acceso al usuario
             console.log("usuariologueado")

             

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

import { Component } from '@angular/core';
import { CargarscriptsService } from '../cargarscripts.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import{Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {


  constructor (private cargarscripts:CargarscriptsService,private auth:AngularFireAuth,private router:Router){
    cargarscripts.carga([
       
    "assets/vendor/aos/aos.js",
    "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "assets/vendor/glightbox/js/glightbox.min.js",
    "assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "assets/vendor/swiper/swiper-bundle.min.js",
    "assets/vendor/php-email-form/validate.js",
  
    
     ])
    }
    cerrarSesion(){
      this.auth.authState.subscribe(user=>{
        if(user){
          this.auth.signOut().then(()=>{
            localStorage.removeItem('user');
            alert("¡Sesión Finalizada!")
window.location.reload()
          })
        }
        else{
          this.router.navigate(['/inicio'])
    }
     })
   }
   
}





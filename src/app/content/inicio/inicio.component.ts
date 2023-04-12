import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/app/cargarscripts.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor (private cargarscripts:CargarscriptsService){
    cargarscripts.carga([
       
      "assets/vendor/purecounter/purecounter_vanilla.js",
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/typed.js/typed.min.js",
      "assets/vendor/waypoints/noframework.waypoints.js",
      "assets/vendor/php-email-form/validate.js",
    
      "assets/js/main.js",

     
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/php-email-form/validate.js",
    
      "assets/js/main.js"

     ])
    }

  
}

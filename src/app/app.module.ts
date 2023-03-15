import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './content/inicio/inicio.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { ContentComponent } from './content/content.component';
import { SesionComponent } from './sesion/sesion.component';
import { RouterModule,Routes } from '@angular/router';
/** */
import { CargarscriptsService } from './cargarscripts.service';
import { AcercaComponent } from './content/acerca/acerca.component';
import { RecamaraComponent } from './content/recamara/recamara.component';
import { ComedorComponent } from './content/comedor/comedor.component';
import { SillasComponent } from './content/sillas/sillas.component';
import { ContactoComponent } from './content/contacto/contacto.component';



const appRoutes: Routes = [
 {path:'',component:InicioComponent},
 {path:'inicio',component:InicioComponent},
 {path:'acerca',component:AcercaComponent},
 {path:'recamara',component:RecamaraComponent},
 {path:'comedor',component:ComedorComponent},
 {path:'sillas',component:SillasComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'sesion',component:SesionComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    ContentComponent,
    SesionComponent,
    AcercaComponent,
    SillasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6yBIB8wVXpi2i6JZjYlTJReEBnqWuoAQ",
      authDomain: "muebles-la-espuela.firebaseapp.com",
      projectId: "muebles-la-espuela",
      storageBucket: "muebles-la-espuela.appspot.com",
      messagingSenderId: "960928744373",
      appId: "1:960928744373:web:cb3425b44e27b915a5cffc",
      measurementId: "G-BLTEVYDRPY"}
)
],

  
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

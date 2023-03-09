import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './content/inicio/inicio.component';
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
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

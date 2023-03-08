import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { ContentComponent } from './content/content.component';
import { SesionComponent } from './sesion/sesion.component';
import { RouterModule,Routes } from '@angular/router';
/** */
import { CargarscriptsService } from './cargarscripts.service';
import { AcercaComponent } from './content/acerca/acerca.component';
import { RecamaraComponent } from './content/recamara/recamara.component';

const appRoutes: Routes = [
 {path:'',component:InicioComponent},
 {path:'acerca',component:AcercaComponent},
 {path:'inicio',component:InicioComponent},
 {path:'recamara',component:RecamaraComponent},


  
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
    RecamaraComponent
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

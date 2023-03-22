import { Component } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

form={
nombre:"",
correo:"",
contrasena:""

}
ccontrasena:any


constructor(){}

ngOnInit(): void{

}
 
//registrarme
registrarme(){
  if(this.form.nombre != '' && this.form.correo != '' && this.contrasena != '' && this.ccontrasena!=''){
    if(this.form)
  }
}
}

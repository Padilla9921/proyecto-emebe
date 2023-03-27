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
    if(this.form.contrasena!=this.ccontrasena){
      alert("las contrasenas no coinciden.")
    }
    else{
      this.adduser(this.form).then((result)=>{
        if(result){
          alert("Registrado correctamente!")
          this.ngOnInit()
        }else{
          alert("Error, intentalo nuevamente.!")

        }

      })
    }
   }
   else{
    alert("Favor de completar los datos!")
    
   }
}
/*Agregar Usuario*/
 adduser(form: any){
  var promise = new Promise((resolve, reject)=>{
    this.auth.createUserWithEmailAndPassword(form.correo, form.contrasena)
    .then((result)=>{
      resolve(result)
    })
    .catch(function(error){
      if(error.code == 'auth/invalid-email'){
        alert("ingresa un correo electronico valido.")
      }
      if(error.code == 'auth/email-already-in-use'){
        alert("Ese correo ya se encuentra registrado")
      }
      if(error.code =='auth/weak-password'){
        alert("la contrasena debe tener al menos 6 caracteres.")
      }
    })
  })
  return promise;
 }
 }

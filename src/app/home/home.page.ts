import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  saludo:string;
  contador:boolean;
  public valor: boolean =true;
  Contactos = new Array (); 
  addContactos = {
    nombre:'',
    telefono: '',
    email: '',
    notas: ''  
  }


  constructor(public alertController: AlertController) {
    this.saludo = 'Agregar contacto'
    this.contador = false;
  }

  add(contacto){
    this.Contactos.push(contacto)
    this.addContactos = {
      nombre:'',
      telefono: '',
      email: '',
      notas: ''
    }
    this.contador = true;
  }

  delete(namesContac){
    var i = this.Contactos.indexOf(namesContac);
    this.Contactos.splice(i, 1);
  }


  async contactoAdd() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CONTACTOS',
      message: '<strong>Contacto Agregado Correctamente</strong> ',  
      buttons: [
         {
          text: 'Aceptar',
          handler: () => {
            console.log('Contacto Agregado');
          }
        }
      ]
    });
    await alert.present();
  }

  async contactoDelet() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ELIMINAR',
      message: '<strong>¿Borrar Definitivamente el Contacto?</strong> ',  
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Eliminación Cancelada');
          }
          },
         {
          text: 'Aceptar',
          handler: () => {
            this.delete(this.Contactos);
            console.log('Eliminación Confirmada');
          }
        }
      ]
    });
    await alert.present();
  }

 

  async presentarDatos(indice) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CONTACTOS'+ (indice+1),
      message: '<strong>NOMBRE: </strong> '+ this.Contactos[indice].nombre+
      '<br><strong>TELEFONO: </strong>'+ this.Contactos[indice].telefono+
      '<br><strong>EMAIL: </strong>'+ this.Contactos[indice].email+
      '<br><strong>NOTAS: </strong>'+ this.Contactos[indice].notas,  
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Eliminación Cancelada');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Eliminación Confirmada');
          }
        }
      ]
    });
    await alert.present();
  }
}

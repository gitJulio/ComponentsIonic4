import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo:string='Alert';
  constructor(public alert: AlertController) { }

  ngOnInit() {}

  async presentAlertConfirm() {
     const alert = await this.alert.create({
       header: 'Confirmar!',
       message: '<strong>¿Qué acción desea realizar?</strong>',
       backdropDismiss:false,
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           cssClass: 'secondary',
           handler: (blah) => {
             console.log('Confirm Cancel: blah');
           }
         }, {
           text: 'Ok',
           handler: () => {
             console.log('Confirm Okay');
           }
         }
       ]
     });

     await alert.present();
   }

   /*PROMP*/
   async presentAlertPrompt(title) {
   const alert = await this.alert.create({
     header: 'Ingrese!',
     inputs: [
       {
         name: 'name1',
         type: 'text',
         placeholder: 'Titulo'
       }
     ],
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         cssClass: 'secondary',
         handler: () => {
           console.log('Confirm Cancel');
         }
       }, {
         text: 'Ok',
         handler: (inputs) => {
           this.titulo=inputs.name1
         }
       }
     ]
   });

   await alert.present();
 }

}

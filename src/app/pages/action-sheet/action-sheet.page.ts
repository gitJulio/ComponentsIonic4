import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheet: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
   const actionSheet = await this.actionSheet.create({
     header: 'Albums',
     backdropDismiss:false,
     buttons: [{
       text: 'Borrar',
       role: 'destructive',
       icon: 'trash',
       cssClass:'rojo',
       handler: () => {
         console.log('Delete clicked');
       }
     }, {
       text: 'Compartir',
       icon: 'share',
       handler: () => {
         console.log('Share clicked');
       }
     }, {
       text: 'Play (open modal)',
       icon: 'arrow-dropright-circle',
       handler: () => {
         console.log('Play clicked');
       }
     }, {
       text: 'Favorito',
       icon: 'heart',
       handler: () => {
         console.log('Favorite clicked');
       }
     }, {
       text: 'Cerrar',
       icon: 'close',
       role: 'cancel',
       handler: () => {
         console.log('Cancel clicked');
       }
     }]
   });
   await actionSheet.present();
 }

}

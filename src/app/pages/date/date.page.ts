import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  fechaNaci:Date= new Date();
  customPickerOptions;
  constructor() { }

  ngOnInit() {
      this.customPickerOptions = {
        buttons: [{
          text: 'Save',
          handler: (evento) =>
          console.log('Clicked Save!',evento.day.value)

        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }]
      }
  }

  CambioFecha(event){
    console.log('ionChange',event)
    console.log('Date',new Date(event.detail.value))
  }

}

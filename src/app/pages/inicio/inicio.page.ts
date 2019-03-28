import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[]=[
    {
      icon:'american-football',
      nombre:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'appstore',
      nombre:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'contact',
      nombre:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-on',
      nombre:'Botones y Router',
      redirectTo:'/botones'
    },
    {
      icon:'card',
      nombre:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkbox',
      nombre:'Checkbox',
      redirectTo:'/check'
    },
    {
      icon:'calendar',
      nombre:'datetime',
      redirectTo:'/date'
    },
    {
      icon:'car',
      nombre:'fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid',
      nombre:'Grid Row',
      redirectTo:'/grid'
    },
    {
      icon:'infinite',
      nombre:'Infinite Scroll',
      redirectTo:'/infinite-scroll'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}


interface Componente{
  icon:string;
  nombre:string;
  redirectTo:string;
}

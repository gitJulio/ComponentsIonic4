import { DataService } from '../../services/data.service';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista;
  dataUsuarios:any;
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataUsuarios=this.dataService.getUser();
  }

  share(user){
    console.log(user)
    this.lista.closeSlidingItems()
  }
  favorite(user){
    console.log(user)
    this.lista.closeSlidingItems()
  }
  eliminar(user){
    console.log(user)
  }

}

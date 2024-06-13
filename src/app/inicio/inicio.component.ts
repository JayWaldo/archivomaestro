import { Component, OnInit, Output } from '@angular/core';
import data from '../fakedata/users.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  fakeUsers: any;
  
  title = "Inicio"
  icon = "fas fa-home"
  constructor(){

  }

  
  ngOnInit(): void {
    
    this.fakeUsers = data;
  }
  
}

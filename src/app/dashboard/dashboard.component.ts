import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { RegistroComponent } from '../registro/Registro.component';
import { FormularioComponent } from '../MultiFormulario/formulario/formulario.component';
import data from '../fakedata/users.json'
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class DashboardComponent{
  constructor(){ }
  navList = [
    {title: "Inicio", icon: "fas fa-home"},
    {title: "Registro", icon: "fas fa-user"},
  ];

  currentUsers=data;
  admin = this.currentUsers[0]

  selectedItem: Number = 0;

  

  selectItem(index:Number): void {
    this.selectedItem = index;
    console.log(this.selectedItem);
  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { AccountsComponent } from '../accounts/accounts.component';
import { AlcanceComponent } from '../alcance/alcance.component';
import { ResumenComponent } from '../resumen/resumen.component';
import { SolucionComponent } from '../solucion/solucion.component';
import { FormularioComponent } from '../MultiFormulario/formulario/formulario.component';
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
export class DashboardComponent implements OnInit {
  title = 'Home';
  navList = [
    {title: 'Inicio', icon: 'fas fa-home'},
    {title: 'Cuentas', icon: 'fas fa-user-circle'},
    {title: 'Resumen', icon: 'fas fa-list-alt'},
    {title: 'Solucion', icon: 'fas fa-check-square'},
    {title: 'Alcance', icon: 'fas fa-chart-line'},
    {title: 'Registro', icon: 'fas fa-id-card'}
  ];

  selectedItem: Number = 5;
  constructor() { }

  selectItem(index:Number): void {
    this.selectedItem = index;
    console.log(this.selectedItem);
  }
  ngOnInit(): void {
  }

}

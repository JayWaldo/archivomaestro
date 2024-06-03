import { Component, OnInit } from '@angular/core';
import { Servicio } from './Servicio';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-facturacion-total-form',
  templateUrl: './facturacion-total-form.component.html',
  styleUrls: ['./facturacion-total-form.component.css'],
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
export class FacturacionTotalFormComponent {
  title = 'Facturacion Total'
  facturaList = [
    '',
    'luis',
    'pedro',
    'Juan',
    'Yo mismo alv',
    'Tu jefa'
  ]
  data = {
    TAM : NaN,
    InfraRed: NaN,
    Colaboracion: NaN,
    DataCenter: NaN,
    Ciberseguridad: NaN,
    SeguridadFisica: NaN,
    IA: NaN,
    SolucionesPortafolio: false,
    Servicio: [] as Servicio[]
  }
  serviceData = {
    servicio: '',
    inversion : NaN
  };

  serviceList: Servicio[] = [
    {
      servicio: 'IA',
      inversion: 1500
    }
  ];
  constructor() { }

  saveService(){
    if(this.serviceData.servicio && this.serviceData.inversion != null){
      this.serviceList.push({ ...this.serviceData });
      this.serviceData.servicio = '';
      this.serviceData.inversion = NaN;
    }
  }

  deleteService(index: number){
    if(index > -1 && index < this.serviceList.length){
      this.serviceList.splice(index, 1);
    }
  }
  
  saveData(){
    this.data.Servicio = [...this.serviceList];
    console.log(this.data);
  }
}

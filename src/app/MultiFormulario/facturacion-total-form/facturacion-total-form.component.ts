import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IFacturacionTotal, IServicio } from '../Modelos';

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
    'Juan'
  ]
  @Input() data: IFacturacionTotal = {
    TAM : 0,
    InfraRed: 0,
    Colaboracion: 0,
    DataCenter: 0,
    Ciberseguridad: 0,
    SeguridadFisica: 0,
    IA: 0,
    SolucionesPortafolio: false,
    Servicio: [] as IServicio[]
  }
  serviceData = {
    servicio: '',
    inversion : NaN
  };

  serviceList: IServicio[] = [
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

import { Component, OnInit } from '@angular/core';
import { Servicio } from './Servicio';

@Component({
  selector: 'app-facturacion-total-form',
  templateUrl: './facturacion-total-form.component.html',
  styleUrls: ['./facturacion-total-form.component.css']
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
  serviceData = {
    servicio: '',
    inversion: 0
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
      this.serviceData.inversion = 0;
    }
  }

  deleteService(index: number){
    if(index > -1 && index < this.serviceList.length){
      this.serviceList.splice(index, 1);
    }
  }

}

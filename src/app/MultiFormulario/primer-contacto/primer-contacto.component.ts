import { Component, Input} from '@angular/core';
import { IPrimerContacto } from '../Modelos';

@Component({
  selector: 'app-primer-contacto',
  templateUrl: './primer-contacto.component.html',
  styleUrls: ['./primer-contacto.component.css']
})
export class PrimerContactoComponent{

  @Input() data : IPrimerContacto= {
    fechaPrimerContactoRedesSociales : new Date(),
    fechaPrimerContactoReclutador : new Date(),
    estatusPrimerContacto: '',
  }
  title = "Primer Contacto"
  estatusList = [
    'RECHAZADO',
    'NO RESPONDIO',
    'NUMERO NO CORRESPONDE',
    'CONTACTADO POR WHATSAPP',
    'CONTACTADO POR LLAMADA',
    'CONTACTO POR FB',
    'NO ESTA INTERESADO'
  ]

  saveData(){
    console.log(this.data);
  }

  constructor() {
  }

  // willShow(){
  //   console.log(this.fuenteIndex + ' fue la opcion');
  //   if(this.fuenteIndex == 19 || this.fuenteIndex ==
  //   20){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}

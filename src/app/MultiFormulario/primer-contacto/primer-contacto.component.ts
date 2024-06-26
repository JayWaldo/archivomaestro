import { Component, Input, OnInit} from '@angular/core';
import { IPrimerContacto } from '../Modelos';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-primer-contacto',
  templateUrl: './primer-contacto.component.html',
  styleUrls: ['./primer-contacto.component.css']
})
export class PrimerContactoComponent implements OnInit{

  @Input() data : IPrimerContacto= {
    fechaPrimerContactoRedesSociales : new Date(),
    fechaPrimerContactoReclutador : new Date(),
    estatusPrimerContacto: '',
  }
  title = "Primer Contacto"
  mensajeFuente?: string;
  subscipcion?: Subscription;

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

  constructor(private servicioCompartido: SharedService) {

  }

 ngOnInit(): void {
    this.subscipcion = this.servicioCompartido.mensaje$.subscribe(msj => {
      this.mensajeFuente = msj;
   })
 }

  willShow(){
    if(this.mensajeFuente === 'REDES SOCIALES EMPLEOS MEGA' || this.mensajeFuente ===
    'REDES SOCIALES RECLUTADOR'){
      return true
    } else {
      return false
    }
  }
}
    
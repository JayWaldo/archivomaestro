import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IDatosCandidato } from '../Modelos';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-datos-candidato',
  templateUrl: './datos-candidato.component.html',
  styleUrls: ['./datos-candidato.component.css']
})
export class DatosCandidatoComponent implements OnInit {

  title = "Datos del Candidato"
  mensajeFuente?: string;
  escolaridadList = [
    'PRIMARIA TERMINADA',
    'PRIMARIA TRUNCA',
    'SECUNDARIA TERMINADA',
    'SECUNDARIA TRUNCA',
    'PREPARATORIA TERMINADA',
    'PREPARATORIA TRUNCA',
    'LICENCIATURA TERMINADA',
    'LICENCIATURA TRUNCA'
  ]
  fuentesCaptacion = [
    'AGENCIAS LOCALES',
    'ANUNCIOS DE TRANSPORTE',
    'BOLSA DE EMPLEO MEGA',
    'CETIS',
    'COMPUTRABAJO',
    'CONALEP',
    'DGTI',
    'EMPLEOS TI',
    'FERIA PRESENCIAL MEGA',
    'FERIA VIRTUAL MEGA',
    'HAWAIANA',
    'HEAD HUNTERS',
    'INDEED',
    'LINKEDIN',
    'LONA',
    'OCC',
    'PERIFONEO',
    'PERIODICO',
    'RADIO',
    'REDES SOCIALES EMPLEOS MEGA',
    'REDES SOCIALES RECLUTADOR',
    'REFERIDO',
    'UNIVERSIDADES',
    'VOLANTE'
  ]
  optGrupos: {[key: string]: string[]} = {
    'Reclutador' : ['Fernando', 'Roberto'],
    'Generalista RH' : ['opcion'],
    'Coordinador de Reclutamiento y Seleccion' : ['opcion'],
    'Jefe de RH' : ['opcion'],
    'Gerente de RH' : ['opcion'],
    'Gerente Regional de RH' : ['opcion'],
    'Admin. de Redes Sociales' : ['opcion'],
    'Aux. de RH' : ['opcion'],
    'Aux. de Reclutamiento y Seleccion' : ['opcion']
  }
  vacantes = [
    'chofer',
    'vendedor',
    'Admin Contable'
  ]
  @Input() data : IDatosCandidato = {
    fuente: "",
    reclutador: "",
    nombre: "",
    edad: 0,
    genero: "",
    escolaridad: "",
    telefono: 0,
    puestoSolicitado: ""
  }

  constructor(private servicioCompartido: SharedService) {

   }

  ngOnInit(): void {
  }
  getOptGrupos(){
    return Object.keys(this.optGrupos);
  }
  getOpciones(grupo: string){
    return this.optGrupos[grupo];
  }
  onChangeMsj(event: any){
    this.mensajeFuente = event.target.value;
    this.servicioCompartido.enviarMensaje(this.mensajeFuente!);
  }
  saveData(){
    console.log(this.data);
  }
}

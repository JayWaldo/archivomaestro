import { Component, Input, OnInit } from '@angular/core';
import { IPsicometriasEvaluacion } from '../Modelos';

@Component({
  selector: 'app-psicometrias-evaluaciones',
  templateUrl: './psicometrias-evaluaciones.component.html',
  styleUrls: ['./psicometrias-evaluaciones.component.css']
})
export class PsicometriasEvaluacionesComponent implements OnInit {
  title = 'Psicometrias y Evaluaciones'
  isCompleted: boolean = false;

  @Input() data : IPsicometriasEvaluacion= {
    IdCandidato: 0,
    estatusGeneral : '',
    integritest: '',
    avatar: '',
    potencialIntelectual: '',
    terman: '',
    reddin: '',
    circuloLaboral: '',
    referenciasLaborales: '',
    estudioSocioEconomico: '',
    examenManejo: ''
  }
  dropOpciones : {[key: string]: string[]}= {
    'estatus': ['APROBADA', 'NO APROBADA'],
    'integritest': ['RECOMENDADO', 'SE REQUIERE ACLARACION', 'MARGINAL', 'NO RECOMENDABLE', 'SIN RESULTADOS'],
    'psicometricas': ['APROBADA', 'NO APROBADA', 'NO LE APLICA AL PUESTO'],
    'circuloLaboral': ['CON RECOMENDACION', 'CON CONSTANCIA'],
    'referenciasLaborales': ['RECOMENDABLE', 'NO RECOMENDABLE'],
    'socioeconomico': ['RECOMENDABLE', 'NO RECOMENDABLE', 'CON RESERVAS', 'NO LE APLICA AL PUESTO'],
    'examManejo': ['APROBADO', 'NO APROBADO', 'CON RESERVAS', 'NO LE APLICA AL PUESTO'],
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  getOptGrupos(){
    return Object.keys(this.dropOpciones);
  }
  getOpciones(grupo: string){
    return this.dropOpciones[grupo];
  }

  saveData(){
    console.log(this.data)
  }

}

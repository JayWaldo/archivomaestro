import { Component, Input, OnInit } from '@angular/core';
import { IDatosCandidato } from '../Modelos';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStateService } from 'src/app/services/FormState.service';

@Component({
  selector: 'app-datos-candidato',
  templateUrl: './datos-candidato.component.html',
  styleUrls: ['./datos-candidato.component.css']
})
export class DatosCandidatoComponent implements OnInit {

  title = "Datos del Candidato"
  mensajeFuente?: string;
  isCompleted: boolean = false;
  datosCandForm!: FormGroup;
  private formKey = 'datosCandidato';

  escolaridadList = [
    'Primaria Terminada',
    'Primaria Trunca',
    'Secundaria Terminada',
    'Secundaria Trunca',
    'Preparatoria Terminada',
    'Preparatoria Trunca',
    'Licenciatura Terminada',
    'Licenciatura Trunca'
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
    'Admin Contable',
    'Desarrollador'
  ]
  @Input() data : IDatosCandidato = {
    fuente: "",
    reclutador: "",
    nombre: "",
    Rfc: "",
    edad: 0,
    genero: "",
    escolaridad: "",
    telefono: 0,
    puestoSolicitado: ""
  }

  constructor(
    private servicioCompartido: SharedService,
    private formState: FormStateService,
    private fb: FormBuilder
  ) {
    this.datosCandForm = this.fb.group({
      fuente: ['', Validators.required],
      reclutador: ['', Validators.required],
      nombre: ['', Validators.required],
      Rfc: [''],
      edad: [''],
      genero: ['', Validators.required],
      escolaridad: [''],
      telefono: [''],
      puestoSolicitado: ['']
    })
   }

  ngOnInit(): void {
    const savedState = this.formState.getFormState(this.formKey);
    if (savedState) {
      this.datosCandForm.patchValue(savedState);
    } else {
      this.datosCandForm.patchValue(this.data);
    }

    this.datosCandForm.valueChanges.subscribe(() => {
      this.saveFormState();
      this.checkAllFieldsFilled();
    });

    this.checkAllFieldsFilled();
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
    const formValue = this.datosCandForm.value;
    console.log(this.data);
    this.saveFormState();
  }

  private saveFormState(){
    this.formState.saveFormState(this.formKey ,this.datosCandForm.value);
  }
  private checkAllFieldsFilled()
  {
    this.isCompleted = Object.values(this.datosCandForm.value).every(field => field !== '' || field !== null);
  }
}

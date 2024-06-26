import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IAlta, IEntrevista, IPsicometriasEvaluacion, IEstatus, IDatosCandidato, IRegion, IPrimerContacto } from '../Modelos';
import { RegionComponent } from '../region/region.component';
import { DatosCandidatoComponent } from '../datos-candidato/datos-candidato.component';
import { PrimerContactoComponent } from '../primer-contacto/primer-contacto.component';
import { PsicometriasEvaluacionesComponent } from '../psicometrias-evaluaciones/psicometrias-evaluaciones.component';
import { EntrevistaComponent } from '../entrevista/entrevista.component';
import { EstatusComponent } from '../estatus/estatus.component';
import { AltaComponent } from '../alta/alta.component';
import { SharedService } from 'src/app/services/shared.service';
import { CandidatoData } from 'src/app/fakedata/dbTemporal';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
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
    ]),
    trigger('fadeInOutEase', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', [
        animate('0.8s ease-out')
      ]),
      transition('* => void', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class FormularioComponent implements OnInit ,AfterViewInit{
  @ViewChild(DatosCandidatoComponent) datosCandidatoComp!: DatosCandidatoComponent;
  @ViewChild(RegionComponent) regionComp!: RegionComponent;
  @ViewChild(PrimerContactoComponent) primerContactoComp!: PrimerContactoComponent;
  @ViewChild(PsicometriasEvaluacionesComponent) psicoEvaComp!: PsicometriasEvaluacionesComponent;
  @ViewChild(EntrevistaComponent) entrevistaComp!: EntrevistaComponent;
  @ViewChild(EstatusComponent) estatusComp!: EstatusComponent;
  @ViewChild(AltaComponent) altaComp!: AltaComponent;

  showPopUp = false;
  
  sectionsForm = [
    {title: 'Region', checked: false, component: this.regionComp, dataComp: {} as any},
    {title: 'Datos Candidato', checked: false, component: this.datosCandidatoComp, dataComp: {} as any},
    {title: 'Primer Contacto', checked: false, component: this.primerContactoComp, dataComp: {} as any},
    {title: 'Entrevista', checked: false, component: this.entrevistaComp, dataComp: {} as any},
    {title: 'Psicometrias', checked: false, component: this.psicoEvaComp, dataComp: {} as any},
    {title: 'Estatus', checked: false, component: this.estatusComp, dataComp: {} as any},
    {title: 'Alta', checked: false, component: this.altaComp, dataComp: {} as any},
  ];
  constructor(private servicioCompartido: SharedService){}
  ngOnInit(): void {
      this.currentSection();
  }
  ngAfterViewInit() {
  }

  currentPart: number = 1;
  
  currentSection(){
    this.sectionsForm[this.currentPart-1].checked = true;
  }
   
  btnNext(){
    this.saveCurrentSectionData();
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart += 1;
    this.sectionsForm[this.currentPart - 1].checked = true
  }
  btnPrev(){
    this.saveCurrentSectionData();
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart -= 1;
    this.sectionsForm[this.currentPart - 1].checked = true
    
  }

  goToSection(index: number){
    this.saveCurrentSectionData();
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart = index + 1
    this.sectionsForm[this.currentPart - 1].checked = true
  }

  saveCurrentSection(){
    this.saveCurrentSectionData();
    this.showPopUp = true;
    setTimeout(() => {
      this.showPopUp = false;
    }, 3000);
  }
  saveCurrentSectionData(){
    const currentComponent = this.getCurrentComponent();
    if(currentComponent){
      currentComponent.saveData();
      this.sectionsForm[this.currentPart - 1].dataComp = currentComponent.data;
    }
  }

  sendData(){
    let candidatoData = new CandidatoData();
    candidatoData = this.getFormDataAll();

    this.servicioCompartido.enviarDatos(candidatoData);
    console.log(candidatoData);
  }

  getFormDataAll(){
    const dataForm = new CandidatoData();
    dataForm.region = this.sectionsForm[0].dataComp;
    dataForm.datosCandidato = this.sectionsForm[1].dataComp;
    dataForm.primerContacto = this.sectionsForm[2].dataComp;
    dataForm.entrevista = this.sectionsForm[3].dataComp;
    dataForm.psicometricas = this.sectionsForm[4].dataComp;
    return dataForm;
  }

  getCurrentComponent(){
    switch (this.currentPart){
      case 1:
        return this.regionComp;
      case 2:
        return this.datosCandidatoComp;
      case 3:
        return this.primerContactoComp;
      case 4:
        return this.entrevistaComp;
      case 5:
        return this.psicoEvaComp;
      case 6:
        return this.estatusComp;
      case 7:
        return this.altaComp;
      default:
        return null;
    }
  }

}

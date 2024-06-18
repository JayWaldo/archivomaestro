import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ICiberseguridad, IColaboracion, IDataCenter, IFacturacionTotal, IDatosCandidato, ISeguridadFisica, IRegion, IPrimerContacto } from '../Modelos';
import { RegionComponent } from '../region/region.component';
import { DatosCandidatoComponent } from '../datos-candidato/datos-candidato.component';
import { PrimerContactoComponent } from '../primer-contacto/primer-contacto.component';

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
export class FormularioComponent implements AfterViewInit{
  @ViewChild(DatosCandidatoComponent) datosCandidatoComp!: DatosCandidatoComponent;
  @ViewChild(RegionComponent) regionComp!: RegionComponent;
  @ViewChild(PrimerContactoComponent) primerContactoComp!: PrimerContactoComponent;

  showPopUp = false;

  sectionsForm = [
    {title: 'Region', checked: false, component: this.regionComp, dataComp: {} as any},
    {title: 'Datos Candidato', checked: false, component: this.datosCandidatoComp, dataComp: {} as any},
    {title: 'Primer Contacto', checked: false, component: this.primerContactoComp, dataComp: {} as any},
  ]
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
  getCurrentComponent(){
    switch (this.currentPart){
      case 1:
        return this.regionComp;
      case 2:
        return this.datosCandidatoComp;
      case 3:
        return this.primerContactoComp;
      default:
        return null;
    }
  }

}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ResumenFormComponent } from '../resumen-form/resumen-form.component';
import { InfraestructuraFormComponent } from '../infraestructura-form/infraestructura-form.component';
import { ColaboracionFormComponent } from '../colaboracion-form/colaboracion-form.component';
import { DataCenterFormComponent } from '../data-center-form/data-center-form.component';
import { CiberseguridadFormComponent } from '../ciberseguridad-form/ciberseguridad-form.component';
import { SeguridadFisicaFormComponent } from '../seguridad-fisica-form/seguridad-fisica-form.component';
import { IAFormComponent } from '../iaform/iaform.component';
import { FacturacionTotalFormComponent } from '../facturacion-total-form/facturacion-total-form.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ICiberseguridad, IColaboracion, IDataCenter, IFacturacionTotal, IResumen, ISeguridadFisica, Iinfraestructura, IinteligenciaArtificial } from '../Modelos';

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
  @ViewChild(ResumenFormComponent) resumenComp!: ResumenFormComponent;
  @ViewChild(InfraestructuraFormComponent) infraestructuraComp!: InfraestructuraFormComponent;
  @ViewChild(ColaboracionFormComponent) colaboracionComp!: ColaboracionFormComponent;
  @ViewChild(DataCenterFormComponent) dataCenterComp!: DataCenterFormComponent;
  @ViewChild(CiberseguridadFormComponent) ciberSeguridadComp!: CiberseguridadFormComponent;
  @ViewChild(SeguridadFisicaFormComponent) seguridadFisicaComp!: SeguridadFisicaFormComponent;
  @ViewChild(IAFormComponent) IAComp!: IAFormComponent;
  @ViewChild(FacturacionTotalFormComponent) facturacionTotalComp!: FacturacionTotalFormComponent;

  showPopUp = false;

  sectionsForm = [
  {title: 'Resumen', checked: false, component: this.resumenComp, dataComp: {} as any},
  {title: 'Infraestructura', checked: false, component: this.infraestructuraComp, dataComp: {} as any},
  {title: 'Colaboracion', checked: false, component: this.colaboracionComp, dataComp: {} as any},
  {title: 'Data Center', checked: false, component: this.dataCenterComp, dataComp: {} as any},
  {title: 'Ciberseguridad', checked: false, component: this.ciberSeguridadComp, dataComp: {} as any},
  {title: 'Seguridad Fisica', checked: false, component: this.seguridadFisicaComp, dataComp: {} as any},
  {title: 'Inteligencia Artificial', checked: false, component: this.IAComp, dataComp: {} as any},
  {title: 'Facturacion Total', checked: false, component: this.facturacionTotalComp, dataComp: {} as any},
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
        return this.resumenComp;
      case 2:
        return this.infraestructuraComp;
      case 3:
        return this.colaboracionComp;
      case 4:
        return this.dataCenterComp;
      case 5:
        return this.ciberSeguridadComp;
      case 6:
        return this.seguridadFisicaComp;
      case 7:
        return this.IAComp;
      case 8:
        return this.facturacionTotalComp;
      default:
        return null;
    }
  }
}

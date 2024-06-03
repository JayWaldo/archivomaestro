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
  @ViewChild(FacturacionTotalFormComponent) facturacionTotal!: FacturacionTotalFormComponent;

  showPopUp = false;

  sectionsForm = [
  {title: 'Resumen', checked: false, component: () => this.resumenComp},
  {title: 'Infraestructura', checked: false, component: () => this.infraestructuraComp},
  {title: 'Colaboracion', checked: false, component: () => this.colaboracionComp},
  {title: 'Data Center', checked: false, component: () => this.dataCenterComp},
  {title: 'Ciberseguridad', checked: false, component: () => this.ciberSeguridadComp},
  {title: 'Seguridad Fisica', checked: false, component: () => this.seguridadFisicaComp},
  {title: 'Inteligencia Artificial', checked: false, component: () => this.IAComp},
  {title: 'Facturacion Total', checked: false, component: () => this.facturacionTotal},
  ]
  ngAfterViewInit(): void {
      
  }

  currentPart: number = 1;
  
  currentSection(){
    this.sectionsForm[this.currentPart-1].checked = true;
  }
   
  btnNext(){
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart += 1;
    this.sectionsForm[this.currentPart - 1].checked = true
  }
  btnPrev(){
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart -= 1;
    this.sectionsForm[this.currentPart - 1].checked = true
  }

  goToSection(index: number){
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart = index + 1
    this.sectionsForm[this.currentPart - 1].checked = true
  }

  saveCurrentSection(){
    const currentComp = this.sectionsForm[this.currentPart - 1].component();
    currentComp?.saveData();

    this.showPopUp = true;

    setTimeout(() => {
      this.showPopUp = false;
    }, 3000);
  }
}

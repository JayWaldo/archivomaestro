import { Component, ViewChild } from '@angular/core';
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
    ])
  ]
})
export class FormularioComponent{
  sectionsForm = [
  {title: 'Resumen', checked: true},
  {title: 'Infraestructura', checked: false},
  {title: 'Colaboracion', checked: false},
  {title: 'Data Center', checked: false},
  {title: 'Ciberseguridad', checked: false},
  {title: 'Seguridad Fisica', checked: false},
  {title: 'Inteligencia Artificial', checked: false},
  {title: 'Facturacion Total', checked: false},
  ]
  currentPart: number = 1;
   
   
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
}

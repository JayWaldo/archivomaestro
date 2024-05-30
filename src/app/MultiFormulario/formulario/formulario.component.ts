import { Component, ViewChild } from '@angular/core';
import { ResumenFormComponent } from '../resumen-form/resumen-form.component';
import { InfraestructuraFormComponent } from '../infraestructura-form/infraestructura-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  {title: 'Resumen', checked: false},
  {title: 'Infraestructura', checked: true},
  {title: 'Colaboracion', checked: false},
  {title: 'Data Center', checked: false},
  {title: 'Ciberseguridad', checked: false},
  {title: 'Seguridad Fisica', checked: false},
  {title: 'Inteligencia Artificial', checked: false},
  {title: 'Facturacion Total', checked: false},
  ]
  currentPart: number = 2;
   
   
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
}

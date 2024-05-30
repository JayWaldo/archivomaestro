import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  currentPart: number = 2;
  
  // constructor(private fb:FormBuilder) {
  // }
  // formGroup = this.fb.group({
  //   resumen: ['', Validators.required],
  //   website: ['', Validators.required],
  //   sector: ['', Validators.required],
  //   tamano: ['', Validators.required],
  //   presupuestoActual: ['', Validators.required],
  //   presupuestoAnterior: ['', Validators.required],
  //   presupuestoIT: ['', Validators.required],
  //   retos: ['', Validators.required],
  // })


}

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IPrimerContacto } from '../Modelos';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStateService } from 'src/app/services/FormState.service';

@Component({
  selector: 'app-primer-contacto',
  templateUrl: './primer-contacto.component.html',
  styleUrls: ['./primer-contacto.component.css'],
})
export class PrimerContactoComponent implements OnInit, OnDestroy {

  @Input() data: IPrimerContacto = {
    fechaPrimerContactoRedesSociales: new Date(),
    fechaPrimerContactoReclutador: new Date(),
    estatusPrimerContacto: '',
  };
  title = "Primer Contacto";
  mensajeFuente?: string;
  subscripcion?: Subscription;
  primerContactoForm!: FormGroup;
  isCompleted: boolean = false;
  private formKey = 'primerContacto';

  estatusList = [
    'RECHAZADO',
    'NO RESPONDIO',
    'NUMERO NO CORRESPONDE',
    'CONTACTADO POR WHATSAPP',
    'CONTACTADO POR LLAMADA',
    'CONTACTO POR FB',
    'NO ESTA INTERESADO'
  ];

  constructor(
    private servicioCompartido: SharedService,
    private formState: FormStateService,
    private fb: FormBuilder
  ) {
    this.primerContactoForm = this.fb.group({
      fechaPrimerContactoRedesSociales: [''],
      fechaPrimerContactoReclutador: ['', Validators.required],
      estatusPrimerContacto: ['']
    });
  }

  ngOnInit(): void {
    this.subscripcion = this.servicioCompartido.mensaje$.subscribe(msj => {
      this.mensajeFuente = msj;
    });

    const savedState = this.formState.getFormState(this.formKey);
    if (savedState) {
      this.primerContactoForm.patchValue(savedState);
    } else {
      this.primerContactoForm.patchValue(this.data);
    }

    this.primerContactoForm.valueChanges.subscribe(() => {
      this.saveFormState();
      this.checkAllFieldsFilled();
    });

    this.checkAllFieldsFilled();
  }

  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  }

  willShow(): boolean {
    return this.mensajeFuente === 'REDES SOCIALES EMPLEOS MEGA' || this.mensajeFuente === 'REDES SOCIALES RECLUTADOR';
  }

  formatDate(date: any): string {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return '';
    const day = parsedDate.getDate().toString().padStart(2, '0');
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private saveFormState() {
    this.formState.saveFormState(this.formKey, this.primerContactoForm.value);
  }

  private checkAllFieldsFilled() {
    this.isCompleted = Object.entries(this.primerContactoForm.value)
      .filter(([key]) => key !== 'fechaPrimerContactoRedesSociales')
      .every(([key, value]) => value !== '' && value !== null && value !== undefined);
  }

  saveData() {
    const fechaRedes = this.formatDate(this.primerContactoForm.value.fechaPrimerContactoRedesSociales);
    const fechaReclutador = this.formatDate(this.primerContactoForm.value.fechaPrimerContactoReclutador);
    this.primerContactoForm.patchValue({
      fechaPrimerContactoRedesSociales: fechaRedes,
      fechaPrimerContactoReclutador: fechaReclutador ? fechaReclutador : ''
    });
    this.data = this.primerContactoForm.value;
    console.log(this.primerContactoForm.value);
  }
}

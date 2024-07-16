import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IAlta, IEntrevista, IPsicometriasEvaluacion, IEstatus, IDatosCandidato, IRegion, IPrimerContacto, IRH, ICandidato } from '../Modelos';
import { RegionComponent } from '../region/region.component';
import { DatosCandidatoComponent } from '../datos-candidato/datos-candidato.component';
import { PrimerContactoComponent } from '../primer-contacto/primer-contacto.component';
import { PsicometriasEvaluacionesComponent } from '../psicometrias-evaluaciones/psicometrias-evaluaciones.component';
import { EntrevistaComponent } from '../entrevista/entrevista.component';
import { EstatusComponent } from '../estatus/estatus.component';
import { AltaComponent } from '../alta/alta.component';
import { SharedService } from 'src/app/services/shared.service';
import { CandidatoData } from 'src/app/fakedata/dbTemporal';
import { AuthService } from 'src/app/services/auth.service';
import { RHService } from 'src/app/services/rh.service';
import { CandidatoService } from 'src/app/services/candidato.service';
import { EntrevistaService } from 'src/app/services/entrevista.service';
import { PsicometriasService } from 'src/app/services/psicometrias.service';
import { RegionService } from 'src/app/services/region.service';
import { Router } from '@angular/router';

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

  currentRh ?: IRH;
  currentCandidato?: ICandidato;
  candidatoData = new CandidatoData();

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
  constructor(
    private servicioCompartido: SharedService,
    private router: Router,
    private authService: AuthService,
    private rhService: RHService,
    private regionService: RegionService,
    private candidatoService: CandidatoService,
    private entrevistaService: EntrevistaService,
    private psicoService: PsicometriasService){}
  
    ngOnInit(): void {
    this.currentSection();
    this.fetchRHInfo();
  }
  ngAfterViewInit() {
  }

  currentPart: number = 1;
  
  currentSection(){
    this.sectionsForm[this.currentPart-1].checked = true;
  }
   
  btnNext(){
    const currentComponent = this.getCurrentComponent()
    if(currentComponent && currentComponent.isCompleted){
      this.saveCurrentSectionData();
      this.sectionsForm[this.currentPart - 1].checked = false
      this.currentPart += 1;
      this.sectionsForm[this.currentPart - 1].checked = true
    }
  }
  btnPrev(){
    this.saveCurrentSectionData();
    this.sectionsForm[this.currentPart - 1].checked = false
    this.currentPart -= 1;
    this.sectionsForm[this.currentPart - 1].checked = true
    
  }

  goToSection(index: number){
    const currentComponent = this.getCurrentComponent()
    if(currentComponent && 
      currentComponent.isCompleted
    ){
      this.saveCurrentSectionData();
      this.sectionsForm[this.currentPart - 1].checked = false
      this.currentPart = index + 1
      this.sectionsForm[this.currentPart - 1].checked = true
    }
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

  async sendData() {
    try {
      this.candidatoData = this.getFormDataAll();
      this.servicioCompartido.enviarDatos(this.candidatoData);
      console.log(this.candidatoData);
  
      await this.sendCandidato();
      this.sendEntrevista();
      this.sendPsicometrias();
      this.router.navigate(['/candidatos'])
    } catch (error) {
      console.error('Error en el envío de datos: ', error);
    }
  }

  getFormDataAll(){
    const dataForm = new CandidatoData();
    dataForm.region = this.sectionsForm[0].dataComp;
    dataForm.datosCandidato = this.sectionsForm[1].dataComp;
    dataForm.primerContacto = this.sectionsForm[2].dataComp;
    dataForm.entrevista = this.sectionsForm[3].dataComp;
    dataForm.psicometricas = this.sectionsForm[4].dataComp;
    dataForm.estatus = this.sectionsForm[5].dataComp;
    dataForm.alta = this.sectionsForm[6].dataComp;
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

  fetchRHInfo(){
    const email = this.authService.getEmail()
    if(email !== null){
      this.rhService.getRHinfo(email).subscribe(
        (rh: IRH) => {
          this.currentRh = rh;
        },
        (error) => {
          console.error('Error al traer informacion ' + error);
        }
      )
    } else {
      console.error('Correo electronico no encontrado en localStorage.');
    }
  }

  sendCandidato(): Promise<ICandidato> {
    return new Promise((resolve, reject) => {
      if (this.currentRh &&
        this.candidatoData.datosCandidato &&
        this.candidatoData.primerContacto &&
        this.candidatoData.estatus &&
        this.candidatoData.alta &&
        this.candidatoData.region) {
        let candidato: ICandidato = {
          idCandidato: 0,
          nombre: this.candidatoData.datosCandidato.nombre,
          edad: this.candidatoData.datosCandidato.edad,
          genero: this.candidatoData.datosCandidato.genero,
          escolaridad: this.candidatoData.datosCandidato.escolaridad,
          telefono: this.candidatoData.datosCandidato.telefono.toString(),
          puestoSolicitado: this.candidatoData.datosCandidato.puestoSolicitado,
          fuenteCaptacion: this.candidatoData.datosCandidato.fuente,
          reclutadorId: this.currentRh.idUsuarioRH,
          primerContactoRedesSociales: this.candidatoData.primerContacto.fechaPrimerContactoRedesSociales,
          primerContactoReclutador: this.candidatoData.primerContacto.fechaPrimerContactoReclutador,
          estatusPrimerContacto: this.candidatoData.primerContacto.estatusPrimerContacto,
          estatusGeneral: this.candidatoData.estatus.estatusGeneral,
          fechaCierreFolio: this.candidatoData.alta.fechCierreFolio,
          fechaIngreso: this.candidatoData.alta.fechaIngreso,
          promDiasCobertura: this.candidatoData.alta.promDiasCobertura,
          region: this.candidatoData.region.idRegion,
          Rfc: this.candidatoData.datosCandidato.Rfc
        }
        this.candidatoService.addCandidato(candidato).subscribe(
          (res) => {
            console.log('Candidato enviado exitosamente: ' + res);
            this.currentCandidato = res;
            resolve(res);
          }, (error) => {
            console.error('Error al enviar ' + error);
            reject(error);
          }
          )
        } else {
          console.log("faltan datos o algo salio mal en Candidato");
          reject("faltan datos o algo salio mal");
        }
    });
  }


  sendEntrevista(){
    if(this.currentRh &&
      this.currentCandidato &&
      this.candidatoData.entrevista
    ){
      const entrevista : IEntrevista = {
        idCandidato : this.currentCandidato.idCandidato,
        citaEntrevista: this.candidatoData.entrevista.citaEntrevista,
        fechaPrimerEntrevista: this.candidatoData.entrevista.fechaPrimerEntrevista,
        tipoCandidato: this.candidatoData.entrevista.tipoCandidato,
        tipoEntrevista: this.candidatoData.entrevista.tipoEntrevista,
        estatusPrimerEntrevista: this.candidatoData.entrevista.estatusPrimerEntrevista,
        nombreSupervisor: this.candidatoData.entrevista.nombreSupervisor,
        estatusSegundaEntrevista: this.candidatoData.entrevista.estatusSegundaEntrevista,
        validacionSindicato: this.candidatoData.entrevista.validacionSindicato
      }
      this.entrevistaService.addEntrevista(entrevista).subscribe(
        (res) => {
          console.log('Entrevista enviada exitosamente ' + res);
        }, (error) => {
          console.error('Error al enviar entrevista ' + error)
        }
      )
    } else {
      console.log('faltan datos o algo salio mal en Entrevista');
    }
  }

  sendPsicometrias(){
    if(this.currentCandidato &&
      this.candidatoData.psicometricas
    ){
      const psicometriasData : IPsicometriasEvaluacion = {
        IdCandidato: this.currentCandidato.idCandidato,
        estatusGeneral : this.candidatoData.psicometricas.estatusGeneral,
        integritest: this.candidatoData.psicometricas.estatusGeneral,
        avatar: this.candidatoData.psicometricas.estatusGeneral,
        potencialIntelectual: this.candidatoData.psicometricas.estatusGeneral,
        terman: this.candidatoData.psicometricas.estatusGeneral,
        reddin: this.candidatoData.psicometricas.estatusGeneral,
        circuloLaboral: this.candidatoData.psicometricas.referenciasLaborales,
        referenciasLaborales: this.candidatoData.psicometricas.referenciasLaborales,
        estudioSocioEconomico: this.candidatoData.psicometricas.estudioSocioEconomico,
        examenManejo: this.candidatoData.psicometricas.examenManejo
      }
      this.psicoService.addPsicometrias(psicometriasData).subscribe(
        (res) => {
          console.log('Psicometrias enviadas exitosamente');
        }, (error) => {
          console.error('Error al enviar psicometrias ' + error);
        }
      )
    } else {
      console.log('Algo salio mal con los datos para Psicometrias');
    }
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { CandidatoData } from '../fakedata/dbTemporal';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { RHService } from '../services/rh.service';
import { CandidatoService } from '../services/candidato.service';
import { ICandidato, ICandidatoTabla, IRH } from '../MultiFormulario/Modelos';
import { RegionService } from '../services/region.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css'],
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
  ],
})
export class CandidatosComponent implements OnInit, AfterViewInit {

  title = 'Candidatos';
  currentUser ?: IRH;
  candidatosList: ICandidato[] = [];
  tableData: ICandidatoTabla[] = [];
  columnNames: string[] = ['Id', 'Nombre', 'Region', 'Sistema', 'Reclutador', 'Progreso', 'Estatus', 'Opciones'];
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private rhService: RHService,
    private candidatoService: CandidatoService,
    private regionService: RegionService) { }
  ngOnInit(): void {
    this.fetchRHInfo();
  }
  ngAfterViewInit(): void {
  }
  
  fetchRHInfo(){
    const email = this.authService.getEmail()
    if(email !== null){
      this.rhService.getRHinfo(email).subscribe(
        (rh: IRH) => {
          this.currentUser = rh;
          this.cargarCandidatos(rh.idUsuarioRH);
        },
        (error) => {
          console.error('Error al traer informacion ' + error);
        }
      )
    } else {
      console.error('Correo electronico no encontrado en localStorage.');
    }
  }

  cargarCandidatos(rhId: number): void{
    this.candidatoService.getCandidatos(rhId).subscribe(
      (candidatos: ICandidato[]) => {
        this.candidatosList = candidatos;
        this.cargarDatosEnArray();
      }, (error) => {
        console.error('Error al cargar candidatos: ' + error);
      }
    );
  }

  cargarReclutadorDelCandidato(rhId: number): Promise<string>{
    return new Promise((resolve, reject) => {
      this.rhService.getRHById(rhId).subscribe(
        (res) => {
          resolve(res.nombre);
        }, (error) => {
          console.error('No se pudo recuperar el nombre del Reclutador ' + error);
        }
      )
    })
  }

  getRegionById(id: number): Promise<string>{
    return new Promise((resolve, reject) => {
      this.regionService.getRegionById(id).subscribe(
        (res) => {
          resolve(res.region);
        }, (error) => {
          console.error('No se pudo traer la region ' + error);
          reject("No se pudo traer la region")
        }
      )
    })
  }
  getSistemaByRegionId(id: number): Promise<string>{
    return new Promise((resolve, reject) => {
      this.regionService.getRegionById(id).subscribe(
        (res) => {
          resolve(res.sistema);
        }, (error) => {
          console.error('No se pudo traer el sistema ' + error);
          reject("No se pudo traer el sistema")
        }
      )
    })
  }

  calcularProgreso(candidato: ICandidato): number{
    let progreso = 0;



    return progreso
  }

  async cargarDatosEnArray(){
    try{
      for(let candi of this.candidatosList){
        const region = await this.getRegionById(candi.region);
        const sistema = await this.getSistemaByRegionId(candi.region);
        const reclutador = await this.cargarReclutadorDelCandidato(candi.reclutadorId);
        let candidato : ICandidatoTabla = {
          Id: candi.idCandidato,
          Nombre: candi.nombre,
          Region: region,
          Sistema: sistema,
          Reclutador: reclutador,
          Progreso: this.calcularProgreso(candi),
          Estatus: candi.estatusGeneral
        }
        console.log(candidato);
        this.tableData.push(candidato);
      }
    } catch (error){
      console.error(error);
    }
  }

  goToRegistro(){
    this.router.navigate(['/registro']);
  }

  editarRegistro(index:number){
    alert("En progreso!");
  }
  eliminarRegistro(index:number){
    if(index > -1 && index < this.candidatosList.length){
      this.candidatosList.splice(index, 1);
    }
  }
}

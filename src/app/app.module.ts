import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import localMx from '@angular/common/locales/es-MX'

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/Registro.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormularioComponent } from './MultiFormulario/formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegionComponent } from './MultiFormulario/region/region.component';
import { DatosCandidatoComponent } from './MultiFormulario/datos-candidato/datos-candidato.component';
import { PrimerContactoComponent } from './MultiFormulario/primer-contacto/primer-contacto.component';
import { registerLocaleData } from '@angular/common';
import { SharedService } from './services/shared.service';
import { PsicometriasEvaluacionesComponent } from './MultiFormulario/psicometrias-evaluaciones/psicometrias-evaluaciones.component';
import { EstatusComponent } from './MultiFormulario/estatus/estatus.component';
import { AltaComponent } from './MultiFormulario/alta/alta.component';
import { EntrevistaComponent } from './MultiFormulario/entrevista/entrevista.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localMx, 'es-Mx');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistroComponent,
    SearchBarComponent,
    FormularioComponent,
    InicioComponent,
    RegionComponent,
    DatosCandidatoComponent,
    PrimerContactoComponent,
    PsicometriasEvaluacionesComponent,
    EstatusComponent,
    AltaComponent,
    EntrevistaComponent,
    CandidatosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-Mx'}, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

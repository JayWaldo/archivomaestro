import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResumenComponent } from './resumen/resumen.component';
import { SolucionComponent } from './solucion/solucion.component';
import { AlcanceComponent } from './alcance/alcance.component';
import { FormularioComponent } from './MultiFormulario/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ResumenFormComponent } from './MultiFormulario/resumen-form/resumen-form.component';
import { InfraestructuraFormComponent } from './MultiFormulario/infraestructura-form/infraestructura-form.component';
import { ColaboracionFormComponent } from './MultiFormulario/colaboracion-form/colaboracion-form.component';
import { DataCenterFormComponent } from './MultiFormulario/data-center-form/data-center-form.component';
import { CiberseguridadFormComponent } from './MultiFormulario/ciberseguridad-form/ciberseguridad-form.component';
import { SeguridadFisicaFormComponent } from './MultiFormulario/seguridad-fisica-form/seguridad-fisica-form.component';
import { IAFormComponent } from './MultiFormulario/iaform/iaform.component';
import { FacturacionTotalFormComponent } from './MultiFormulario/facturacion-total-form/facturacion-total-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    SearchBarComponent,
    ResumenComponent,
    SolucionComponent,
    AlcanceComponent,
    FormularioComponent,
    ResumenFormComponent,
    InfraestructuraFormComponent,
    ColaboracionFormComponent,
    DataCenterFormComponent,
    CiberseguridadFormComponent,
    SeguridadFisicaFormComponent,
    IAFormComponent,
    FacturacionTotalFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

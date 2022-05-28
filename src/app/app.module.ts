import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditSocioComponent } from './components/add-edit-socio/add-edit-socio.component';
import { ListSocioComponent } from './components/list-socio/list-socio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    AddEditSocioComponent,
    ListSocioComponent,
    NavbarComponent,
    MensajeConfirmacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,//agregamos el modulo creado por nosotros
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

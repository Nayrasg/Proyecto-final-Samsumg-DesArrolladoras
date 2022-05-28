import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditSocioComponent } from './components/add-edit-socio/add-edit-socio.component';
import { ListSocioComponent } from './components/list-socio/list-socio.component';

//creamos las rutas
const routes: Routes = [
  { path: 'add', component: AddEditSocioComponent }, //si el usuario pone la ruta/add muestra el componente de edit. agregar
  { path: '', component: ListSocioComponent }, //si el usuario no pone nada muestra el componente de list
  { path: 'edit/:id', component: AddEditSocioComponent }, //si el usuario pone edit con el id de la persona la muestra el componente de edit. editar
  { path: '**', component: ListSocioComponent } //si el usuario pone cualquier otra ruta muestra el componente de list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

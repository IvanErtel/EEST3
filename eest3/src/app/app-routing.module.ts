import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaImagenesComponent } from './component/galeria-imagenes/galeria-imagenes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { NovedadesComponent } from './component/novedades/novedades.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'novedades', component: NovedadesComponent},
  {path:'galeriaImagenes' , component: GaleriaImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

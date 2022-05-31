import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MisDatosComponent } from './pages/mis-datos/mis-datos.component';
import { MisComprasComponent } from './pages/mis-compras/mis-compras.component';
import { PerfilRoutingModule } from './perfil-routing.module';



@NgModule({
  declarations: [
    MiCuentaComponent,
    MisDatosComponent,
    MisComprasComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }

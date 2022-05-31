import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MisDatosComponent } from './pages/mis-datos/mis-datos.component';
import { MisComprasComponent } from './pages/mis-compras/mis-compras.component';

const routes: Routes = [
  {
    path: '', component: MiCuentaComponent,
    children: [
      {
        path: 'mis-datos', component: MisDatosComponent
      },
      {
        path: 'mis-compras', component: MisComprasComponent
      },
      {
        path: '**', redirectTo: 'mi-cuenta'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PerfilRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', 
    component: PanelComponent,
    children: [
      {
        path: 'inventario', component: InventarioComponent
      },
      {
        path: 'usuarios', component: UsuariosComponent
      },
      {
        path: '**', redirectTo: 'panel'
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
export class AdminRoutingModule { }

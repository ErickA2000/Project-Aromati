import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './pages/panel/panel.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    PanelComponent,
    InventarioComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

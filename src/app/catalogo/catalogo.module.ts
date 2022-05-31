import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';



@NgModule({
  declarations: [
    ProductosComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'productos', component: ProductosComponent
      },
      {
        path: 'productos/detalle', component: DetalleProductoComponent
      },
      {
        path: '**', redirectTo: 'productos'
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
export class CatalogoRoutingModule { }

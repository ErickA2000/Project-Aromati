import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'panel',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilModule )
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'catalogo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

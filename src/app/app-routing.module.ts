import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'destroy-ref',
    loadComponent: () => import('./destroy-ref/destroy-ref.component').then((c) => c.DestroyRefComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

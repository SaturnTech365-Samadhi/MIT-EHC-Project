import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './view/admin-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'admin'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: AdminViewComponent,
        data: {
          title: 'View'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

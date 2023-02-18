import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FarmerViewComponent } from './view/farmer-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Farmer'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: FarmerViewComponent,
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
  exports : [RouterModule]
})
export class FarmerRoutingModule { }

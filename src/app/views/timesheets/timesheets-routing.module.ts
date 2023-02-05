import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetsViewComponent } from './view/timesheets-view.component';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetsCreateComponent } from './create/timesheets-create.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Timesheets'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: TimesheetsViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'create',
        component: TimesheetsCreateComponent,
        data: {
          title: 'Create'
        }
      },
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
export class TimesheetsRoutingModule { }
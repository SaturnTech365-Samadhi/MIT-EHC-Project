import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './view/admin-view.component';
import { UserRegisterComponent } from './user/user-register.component';
import { ZoneRegisterComponent } from './zone/zone-register.component';
import { LogViewComponent } from './log/log-view.component';

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
      },
      {
        path: 'user-registration',
        component: UserRegisterComponent,
        data: {
          title: 'User-Register'
        }
      },
      {
        path: 'zone-register',
        component: ZoneRegisterComponent,
        data: {
          title: 'Zone-Register'
        }
      },
      {
        path: 'log',
        component: LogViewComponent,
        data: {
          title: 'Log'
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
export class AdminRoutingModule { }

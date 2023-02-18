import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './view/admin-view.component';
import { LogViewComponent } from './log/log-view.component';
import { UserRegisterComponent } from './user/user-register.component';
import { ZoneRegisterComponent } from './zone/zone-register.component';
import { NavModule, TabsModule } from '@coreui/angular';


@NgModule({
  declarations: [
    AdminViewComponent,
    LogViewComponent,
    UserRegisterComponent,
    ZoneRegisterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,    
    NavModule, 
    TabsModule
    
  ]
})
export class AdminModule { }

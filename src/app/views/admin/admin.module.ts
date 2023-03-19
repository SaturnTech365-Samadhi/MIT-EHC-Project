import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './view/admin-view.component';
import { LogViewComponent } from './log/log-view.component';
import { UserRegisterComponent } from './user/user-register.component';
import { ZoneRegisterComponent } from './zone/zone-register.component';
import { AvatarModule, ButtonGroupModule, ButtonModule, CardModule, FormModule, GridModule, NavModule, ProgressModule, TableModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { HttpClientModule } from '@angular/common/http';


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
    TabsModule,
    TableModule,
    UtilitiesModule,
    ButtonModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    HttpClientModule
  ]
})
export class AdminModule { }

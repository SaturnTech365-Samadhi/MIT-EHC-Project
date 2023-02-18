import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerViewComponent } from './view/farmer-view.component';
import { FarmerRegisterComponent } from './register/farmer-register.component';



@NgModule({
  declarations: [
    FarmerViewComponent,
    FarmerRegisterComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }

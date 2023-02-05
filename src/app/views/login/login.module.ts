import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    HttpClientModule,
    FormsModule,
    ModalModule
  ],
  providers: [LoginService]
})
export class LoginModule { }

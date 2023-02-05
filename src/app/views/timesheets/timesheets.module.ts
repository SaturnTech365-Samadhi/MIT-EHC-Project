import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsViewComponent } from './view/timesheets-view.component';
import { TimesheetsCreateComponent } from './create/timesheets-create.component';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';



@NgModule({
  imports: [
    TimesheetsRoutingModule,
    CardModule,
    NavModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    AvatarModule,
    TableModule,
    ModalModule

  ],
  declarations: [TimesheetsViewComponent, TimesheetsCreateComponent,]
})
export class TimesheetsModule {
}
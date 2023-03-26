import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit  {
  ngOnInit(): void {
   
  }

  createUser(){
    location.href = environment.baseUrl + `admin/user-registration`;
    console.log(environment.baseUrl + `admin/user-registration`);
  }

  createZone(){
    location.href = environment.baseUrl + `admin/zone-register`;
    console.log(environment.baseUrl + `admin/zone-register`);
  }
}

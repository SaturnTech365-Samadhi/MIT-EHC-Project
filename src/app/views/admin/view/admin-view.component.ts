import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit  {

  public getZones:any = [];
  public getUsers:any = [];
  public getLogU:any = [];
  public getLogS:any = [];
  
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUserDetails(); 
    this.getZoneDetails(); 
    this.getLogByUserDetails();
    this.getLogBySysemDetails();

  }

  createUser(){
    location.href = environment.baseUrl + `admin/user-registration`;
    console.log(environment.baseUrl + `admin/user-registration`);
  }

  createZone(){
    location.href = environment.baseUrl + `admin/zone-register`;
    console.log(environment.baseUrl + `admin/zone-register`);
  }

  // getZoneDetails() {
  //   this.adminService.getZoneDetails()
  //     .subscribe(data => {
  //       this.getZones = data;
  //     });
  //  }

   getUserDetails() {
    this.adminService.getUserDetails()
      .subscribe(data => {
        this.getUsers = data;
      });
   }

   getZoneDetails() {
    this.adminService.getZoneDetails()
      .subscribe(data => {
        this.getZones = data;
      });
   }

   getLogByUserDetails() {
    this.adminService.getLogByUserDetails()
      .subscribe(data => {
        this.getLogU = data;
      });
   }

   getLogBySysemDetails() {
    this.adminService.getLogBySystemDetails()
      .subscribe(data => {
        this.getLogS = data;
      });
   }
}

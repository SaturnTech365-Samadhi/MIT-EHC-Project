import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientAdapterService } from './adapters/http-client-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = environment.apiUrl;

  constructor(private httpClientAdapterService: HttpClientAdapterService) { }

  register(data: any) {
    var url: string = this.url + "registerUser.php";
    console.log(data);
    //return this.httpClientAdapterService.post(url, undefined, undefined, data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  // registerUser(data: any) {
  //   var url: string = this.url + "user/c/";
  //   return this.httpClientAdapterService.post(url, undefined, undefined, data);
  // }

  registerZone(){
    var url: string = this.url + "zone/c/";
    return this.httpClientAdapterService.post(url, undefined, undefined);
  }

  AddEmergency(data: any) {
    var url: string = this.url + "addEmergency.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  getUserDetails(){
    var url: string = "https://mocki.io/v1/4957e7d5-4318-46eb-8271-8b5b07942fc7";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  getZoneDetails(){
    var url: string = "https://mocki.io/v1/b4baf57e-ddc9-42fc-a333-325dfb943f96";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  getLogByUserDetails(){
    var url: string = "https://mocki.io/v1/44b741be-41d0-4e25-84f0-011e7d63f31b";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  getLogBySystemDetails(){
    var url: string = "https://mocki.io/v1/798c9cb6-e34a-4141-b6fe-bf959d519e60";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }
}

  

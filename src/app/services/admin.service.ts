import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientAdapterService } from './adapters/http-client-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = environment.apiUrl;

  constructor(private httpClientAdapterService: HttpClientAdapterService) { }

  registerUser(data: any) {
    var url: string = this.url + "registerUser.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  viewResponse(){
    var url: string = this.url + "viewResponse.php";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  viewEmergency(){
    var url: string = this.url + "viewEmergency.php";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  viewDetection(){
    var url: string = this.url + "viewDetection.php";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  viewUser(){
    var url: string = this.url + "viewUsers.php";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  viewZone(){
    var url: string = this.url + "viewZones.php";
    return this.httpClientAdapterService.get(url, undefined, undefined);
  }

  deleteUser(id:Number){
    var url: string = this.url + "deleteUser.php/" + id;
    return this.httpClientAdapterService.delete(url, undefined, undefined, undefined);
  }

  addZone(data:any){
    var url: string = this.url + "addZone.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  addSpeaker(data:any){
    var url: string = this.url + "addSpeaker.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  addResponse(data:any){
    var url: string = this.url + "addResponse.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }
  
  addEmergency(data: any) {
    var url: string = this.url + "addEmergency.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  addDetection(data:any){
    var url: string = this.url + "addDetection.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  addCamera(data:any){
    var url: string = this.url + "addCamera.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }

  addBeeBox(data:any){
    var url: string = this.url + "addBeeBox.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }


  updateZone(){

  }

  updateUser(){

  }

  updateSpeaker(){

  }

  updateCamera(){

  }

  updateBeeBox(){

  }

  // viewUser(){
  //   var url: string = "https://mocki.io/v1/4957e7d5-4318-46eb-8271-8b5b07942fc7";
  //   return this.httpClientAdapterService.get(url, undefined, undefined);
  // }

  // viewZone(){
  //   var url: string = "https://mocki.io/v1/b4baf57e-ddc9-42fc-a333-325dfb943f96";
  //   return this.httpClientAdapterService.get(url, undefined, undefined);
  // }

  // viewEmergency(){
  //   var url: string = "https://mocki.io/v1/44b741be-41d0-4e25-84f0-011e7d63f31b";
  //   return this.httpClientAdapterService.get(url, undefined, undefined);
  // }

  // viewDetection(){
  //   var url: string = "https://mocki.io/v1/798c9cb6-e34a-4141-b6fe-bf959d519e60";
  //   return this.httpClientAdapterService.get(url, undefined, undefined);
  // }
}

  

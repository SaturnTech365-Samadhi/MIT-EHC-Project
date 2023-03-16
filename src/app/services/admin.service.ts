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
    var url: string = this.url + "register.php";
    //return this.httpClientAdapterService.post(url, undefined, undefined, data);
   
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientAdapterService } from './adapters/http-client-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private url = environment.apiUrl;

  constructor(private httpClientAdapterService: HttpClientAdapterService) { }

  AddEmergency(data: any) {
    var url: string = this.url + "addEmergency.php";
    console.log(data);
    return this.httpClientAdapterService.post(url, undefined, undefined, data);
  }
}

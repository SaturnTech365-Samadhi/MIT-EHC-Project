import { Injectable } from '@angular/core';
import { HttpClientAdapterService } from './adapters/http-client-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private httpClientAdapterService: HttpClientAdapterService) { }
}

import { environment } from './../../environments/environment';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

    //error Handling
    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error';
      if (error.error instanceof ErrorEvent) {
        //client-side errors
        errorMessage = `Error: ${error.error.message}`;
      }
      else {
        //server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }

    login(data: any) {
      const httpheaders = new HttpHeaders();
      httpheaders.append('content-type', 'application/json');
      return this.httpClient.post(`${this.apiUrl}api/Authentication/Login`, data, { headers: httpheaders }).pipe(
        catchError(this.handleError)
      );
    }
}

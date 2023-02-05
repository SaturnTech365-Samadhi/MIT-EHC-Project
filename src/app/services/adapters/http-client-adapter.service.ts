import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientAdapterService {

  private loginInformation: any = {};
  private token: string;

  constructor(private _http: HttpClient) {
    this.getLoginInformation();
    this.token = this.loginInformation.token;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getLoginInformation() {
    var getFromLocalStorage = localStorage.getItem("loginInformation");
    if (!getFromLocalStorage) {
      this.logout();
    } else {
      this.loginInformation = JSON.parse(getFromLocalStorage ?? "{}");
    }
  }

  logout() {
    localStorage.clear();
    location.href = environment.baseUrl + `login`;
  }

  addKeyValue(object: any, key: string, value: any) {
    object[key] = value;
  }

  get(url: string, headers?: {}, queryParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    return this._http.get(url, { headers: headers, params: queryParameter }).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, headers?: {}, queryParameter?: {}, bodyParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    this.addKeyValue(headers, 'Content-Type', 'application/json');
    return this._http.post(url, bodyParameter, { headers: headers, params: queryParameter }).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, headers?: {}, queryParameter?: {}, bodyParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    this.addKeyValue(headers, 'Content-Type', 'application/json');
    return this._http.put(url, bodyParameter, { headers: headers, params: queryParameter }).pipe(
      catchError(this.handleError)
    );
  }

  postFormData(url: string, headers?: {}, queryParameter?: {}, bodyParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    return this._http.post(url, bodyParameter, { headers: headers, params: queryParameter }).pipe(
      catchError(this.handleError)
    );
  }

  putFormData(url: string, headers?: {}, queryParameter?: {}, bodyParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    return this._http.put(url, bodyParameter, { headers: headers, params: queryParameter }).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string, headers?: {}, queryParameter?: {}, bodyParameter?: {}) {
    if (!headers) {
      headers = {};
    }
    this.addKeyValue(headers, 'Authorization', `Bearer ${this.token}`);
    this.addKeyValue(headers, 'Content-Type', 'application/json');
    return this._http.delete(url, { headers: headers, params: queryParameter, body: bodyParameter }).pipe(
      catchError(this.handleError)
    );
  }
}

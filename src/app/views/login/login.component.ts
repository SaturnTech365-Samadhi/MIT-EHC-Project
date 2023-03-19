import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showPassword: any;
  public password: any;
  public visibleLoginResponse = false;
  public message: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    var data = {
      email: form.value.email,
      password: form.value.password,
    };
    if (data.email == "farmer@gmail.com" && data.password == "123") {
      location.href = environment.baseUrl + `farmer/view`;
    }
    else if (data.email == "admin@gmail.com" && data.password == "123") {
      location.href = environment.baseUrl + `admin/view`;
    }
    else{
      location.href = environment.baseUrl + `login`;
    }
  }

  toggleLoginResponse() {
    this.visibleLoginResponse = !this.visibleLoginResponse;
  }

  handleLoginResponseChange(event: any) {
    this.visibleLoginResponse = event;
  }
}

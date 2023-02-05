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
    var rememberMe = false;
    var data = {
      email: form.value.email,
      password: form.value.password,
      rememberMe: rememberMe
    };
    this.loginService.login(data)
      .subscribe((result: any) => {
        if (result) {

          if (result.isSuccess) {
            var loginInformation = {
              emailAddress: result.emailAddress,
              token: result.token,
              roles: result.roles,
              additionalInfomation: result.additionalInfomation
            };
            localStorage.setItem('loginInformation', JSON.stringify(loginInformation));
            location.href = environment.baseUrl;
          }
          else {
            // alert("Invalid login information");
            this.message="Invalid login information";
            this.toggleLoginResponse();
          }
        }
        else {
          // alert("Server time out please try again");
          this.message="Server time out please try again";
          this.toggleLoginResponse();
        }
      },
        (error: HttpErrorResponse) => {
          // alert("Invalid login information");
          this.message="Invalid login information";
          this.toggleLoginResponse();
          form.controls['password'].reset()
        }
      );
  }

  toggleLoginResponse() {
    this.visibleLoginResponse = !this.visibleLoginResponse;
  }

  handleLoginResponseChange(event: any) {
    this.visibleLoginResponse = event;
  }
}

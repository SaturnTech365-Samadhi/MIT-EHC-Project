import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminService} from 'src/app/services/admin.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  
  customStylesValidated = false;

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {

  }

onSubmit(form: any) {
  this.customStylesValidated = true;
  if (!form.invalid) {
    var isActive = false;
    if (form.value.isActive != "") {
      isActive = true;
    }
console.log(form.value.TelNo);
    var data = {
      //UserID :form.value.
      FirstName:form.value.FirstName,
      LastName:form.value.LastName,
      TelNo:form.value.TelNo,
      email:form.value.email,
      House_No:form.value.House_No,
      Street_Address:form.value.Street_Address,
      City:form.value.City,
      User_name:form.value.User_name,
      user_Password:form.value.user_Password,
      RoleID:"1",
      ZoneID:"2"
   }

    this.adminService.registerUser(data)
    
      .subscribe((result) => {
        console.log(data);
        if (result) {
          form.reset();
          this.customStylesValidated = false;
          alert("success");
        } else {
          alert("failed");
        }
      });
  }
}

onReset() {
  this.customStylesValidated = false;
}

}

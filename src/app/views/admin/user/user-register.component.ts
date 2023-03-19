import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminService} from 'src/app/services/admin.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  
  public data: any =  {
    username : 'test',
    email : 'test@email.com',
    password : '123MyPassword!'
  };

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.register()
  }

  register(){
    this.adminService.register(this.data)
    .subscribe((result) => {
      if (result) {
        console.log(result);
        alert("success");
      } else {
        alert("failed");
      }
    });
}
}

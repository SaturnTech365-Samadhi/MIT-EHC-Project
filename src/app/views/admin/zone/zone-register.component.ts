import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-zone-register',
  templateUrl: './zone-register.component.html',
  styleUrls: ['./zone-register.component.scss']
})
export class ZoneRegisterComponent implements OnInit {
  
  public data: any =  {
    username : 'test',
    email : 'test@email.com',
    password : '123MyPassword!'
  };
  public visible = false;

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.register()
  }

  toggleLiveDemo1() {
    this.visible = !this.visible;
  }

  toggleLiveDemo2() {
    this.visible = !this.visible;
  }

  toggleLiveDemo3() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange1(event: any) {
    this.visible = event;
  }
  handleLiveDemoChange2(event: any) {
    this.visible = event;
  }
  handleLiveDemoChange3(event: any) {
    this.visible = event;
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

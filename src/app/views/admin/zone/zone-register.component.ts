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
  public visible1 = false;
  public visible2 = false;
  public visible3 = false;

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {
    // this.register()
  }

  toggleLiveDemo1() {
    this.visible1 = !this.visible1;
  }

  toggleLiveDemo2() {
    this.visible2 = !this.visible2;
  }

  toggleLiveDemo3() {
    this.visible3 = !this.visible3;
  }

  handleLiveDemoChange1(event: any) {
    this.visible1 = event;
  }
  handleLiveDemoChange2(event: any) {
    this.visible2 = event;
  }
  handleLiveDemoChange3(event: any) {
    this.visible3 = event;
  }
//   register(){
//     this.adminService.register(this.data)
//     .subscribe((result) => {
//       if (result) {
//         console.log(result);
//         alert("success");
//       } else {
//         alert("failed");
//       }
//     });
// }
}

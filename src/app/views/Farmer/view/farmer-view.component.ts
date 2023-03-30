import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-farmer-view',
  templateUrl: './farmer-view.component.html',
  styleUrls: ['./farmer-view.component.scss']
})
export class FarmerViewComponent implements OnInit {
  
  public data: any =  {
    username : 'test',
    email : 'test@email.com',
    password : '123MyPassword!'
  };

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {
    
  }

//   register(){
//     console.log(this.data);
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
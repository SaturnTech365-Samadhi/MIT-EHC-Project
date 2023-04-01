import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-farmer-view',
  templateUrl: './farmer-view.component.html',
  styleUrls: ['./farmer-view.component.scss']
})
export class FarmerViewComponent implements OnInit {
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
    }
    var data ={
      UserID:"2",
      ZoneID:"3",
      Message:form.value.Message
    }

    this.adminService.addEmergency(data)
    
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

  onReset() {
    this.customStylesValidated = false;
  }
  

}
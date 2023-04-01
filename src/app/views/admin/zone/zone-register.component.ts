import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-zone-register',
  templateUrl: './zone-register.component.html',
  styleUrls: ['./zone-register.component.scss']
})
export class ZoneRegisterComponent implements OnInit {
   customStylesValidated=false;
  
  
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

  onSubmit(form: any) {
    this.customStylesValidated = true;
    if (!form.invalid) {
      var isActive = false;
      if (form.value.isActive != "") {
        isActive = true;
      }
  console.log(form.value.TelNo);
      var data = {
        ZoneID :"13",
        ZoneName:form.value.ZoneName,
        Area:form.value.Area,
     }
  
      this.adminService.registerUser(data)
      
        .subscribe((result) => {
          console.log(result);
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
  
  onSpeakerSubmit(form: any) {
    const data = {
      SpeakerID: form.value.SpeakerID,
      Model: form.value.Model,
      SerialNo: form.value.SerialNo,
      ZoneID: form.value.ZoneID
    };
    
    this.adminService.addSpeaker(data)
      .subscribe((result) => {
        if (result) {
          console.log(result);
          alert("Speaker added successfully");
        } else {
          alert("Failed to add speaker");
        }
      });
  }
  onBeeBoxSubmit(form: any) {
    const data = {
      BeeBoxID: form.value.BeeBoxID,
      BoxName: form.value.BoxName,
      ZoneID: form.value.ZoneID
    };
    
    this.adminService.addBeeBox(data)
      .subscribe((result) => {
        if (result) {
          console.log(result);
          alert("Bee box added successfully");
        } else {
          alert("Failed to add bee box");
        }
      });
  }
 onCameraSubmit(form: any) {
    const data = {
      CameraID: "1",
      ModelName: "Canon F45",
      ModelNo: form.value.ModelNo,
      SerialNo: form.value.SerialNo,
      ZoneID: form.value.ZoneID
    };
    
    this.adminService.addCamera(data)
      .subscribe((result) => {
        if (result) {
          console.log(result);
          alert("Camera added successfully");
        } else {
          alert("Failed to add camera");
        }
      });
  }

  onReset() {
    this.customStylesValidated = false;
  }
}

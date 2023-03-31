import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-farmer-view',
  templateUrl: './farmer-view.component.html',
  styleUrls: ['./farmer-view.component.scss']
})
export class FarmerViewComponent implements OnInit {

  constructor(private adminService: AdminService, private route: ActivatedRoute){}
  ngOnInit(): void {
    
  }

}
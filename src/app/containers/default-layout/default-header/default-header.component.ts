import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);
  public loginInformation: any = {};

  constructor(private classToggler: ClassToggleService) {
    super();
  }

  ngOnInit(): void {
    this.getLoginInformation();
  }

  getLoginInformation() {
    var getFromLocalStorage = localStorage.getItem("loginInformation");
    if (!getFromLocalStorage) {
      this.logout();
    } else {
      this.loginInformation = JSON.parse(getFromLocalStorage ?? "{}");
    }
  }

  logout() {
    localStorage.clear();
    location.href = environment.baseUrl + `login`;
  }
}

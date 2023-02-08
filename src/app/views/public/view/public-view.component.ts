import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-view',
  templateUrl: './public-view.component.html',
  styleUrls: ['./public-view.component.scss']
})
export class PublicViewComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/e1.jpg',
    };
    this.slides[1] = {
      src: './assets/images/e2.jpg',
    }
    this.slides[2] = {
      src: './assets/images/e4.jpg',
    }
  }
}

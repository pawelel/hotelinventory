import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Hotel Inventory 2';
  constructor() { }

  ngOnInit(): void {
  }

}

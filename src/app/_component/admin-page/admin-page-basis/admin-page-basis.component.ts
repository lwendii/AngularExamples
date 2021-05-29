import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-basis',
  templateUrl: './admin-page-basis.component.html',
  styleUrls: ['./admin-page-basis.component.css']
})
export class AdminPageBasisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(event: { tab: { textLabel: any; }; }) {
    console.log(event);
    console.log(event.tab.textLabel);
  }

}

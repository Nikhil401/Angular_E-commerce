import { Component, OnInit } from '@angular/core';
import * as alldeals from "../mobiledeals.json";
@Component({
  selector: 'app-mobiledeals',
  templateUrl: './mobiledeals.component.html',
  styleUrls: ['./mobiledeals.component.css']
})
export class MobiledealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;

}


import { Component, OnInit } from '@angular/core';
import * as alldeals from "../offers.json";
@Component({
  selector: 'app-offersdeals',
  templateUrl: './offersdeals.component.html',
  styleUrls: ['./offersdeals.component.css']
})
export class OffersdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}

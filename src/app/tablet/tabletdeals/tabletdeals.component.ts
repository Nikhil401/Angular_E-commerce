import { Component, OnInit } from '@angular/core';
import * as alldeals from "../tabletdeals.json";
@Component({
  selector: 'app-tabletdeals',
  templateUrl: './tabletdeals.component.html',
  styleUrls: ['./tabletdeals.component.css']
})
export class TabletdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;

}


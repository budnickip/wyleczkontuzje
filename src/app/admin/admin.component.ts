import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  floss = FLOSS;
  band = BAND;
  ball = BALL;
  mat = MAT;
  roller = ROLLER;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FLOSS } from '../mock-product';
@Component({
  selector: 'app-knee',
  templateUrl: './knee.component.html',
  styleUrls: ['./knee.component.css']
})
export class KneeComponent implements OnInit {

  floss = FLOSS;
  constructor() { }

  ngOnInit() {
  }

}

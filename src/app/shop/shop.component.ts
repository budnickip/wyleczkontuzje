import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  floss = FLOSS;
  band = BAND;
  ball = BALL;
  mat = MAT;
  roller = ROLLER;
  faShoppingCart = faShoppingCart;
  constructor() { }

  ngOnInit() {
  }
}
//export let floss = new Product('floss band', 20, 'jakis tam opis');

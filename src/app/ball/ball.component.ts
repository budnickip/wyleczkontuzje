import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  floss = FLOSS;
  band = BAND;
  ball = BALL;
  mat = MAT;
  roller = ROLLER;
  faShoppingCart = faShoppingCart;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}

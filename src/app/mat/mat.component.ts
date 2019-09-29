import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {

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
    window.alert('Dodałeś produkt do koszyka!');
    this.cartService.addToCart(product);
    product.amount--;
  }

}

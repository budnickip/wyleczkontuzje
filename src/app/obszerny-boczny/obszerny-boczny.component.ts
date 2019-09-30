import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-obszerny-boczny',
  templateUrl: './obszerny-boczny.component.html',
  styleUrls: ['./obszerny-boczny.component.css']
})
export class ObszernyBocznyComponent implements OnInit {
  floss = FLOSS;
  band = BAND;
  ball = BALL;
  mat = MAT;
  roller = ROLLER;
  faShoppingCart = faShoppingCart;
  constructor(private cartService: CartService,
  public cookiesService: CookiesService) { }

  ngOnInit() {
  }

  addToCart(product) {
    window.alert('Dodałeś produkt do koszyka!');
    this.cartService.addToCart(product);
    product.amount--;
  }

  public addInjury(): void {
    this.cookiesService.set('obszerny', 'true');
  }

}

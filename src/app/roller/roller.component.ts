import { Component, OnInit } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.css']
})
export class RollerComponent implements OnInit {

    floss = FLOSS;
    band = BAND;
    ball = BALL;
    mat = MAT;
    roller = ROLLER;
    faShoppingCart = faShoppingCart;
    constructor(
        private cartService: CartService,
        private location: Location
    ) { }

    ngOnInit() {
    }
    addToCart(product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    }

    goBack(): void {
        this.location.back();
    }
}

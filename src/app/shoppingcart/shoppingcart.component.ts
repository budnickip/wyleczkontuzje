import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CookiesService } from '../cookies.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  items;
    summary;
    user: User;
    users: User[];
    str2 = this.cookiesService.get('token').slice(0, this.cookiesService.get('token').indexOf('@'));
    constructor(private cartService: CartService,
        public cookiesService: CookiesService,
        private userService: UserService ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
      this.summary = this.cartService.getPrice();
      this.getUser();
  }

  onClear(){
      this.items = this.cartService.clearCart();
      this.summary = 0;
  }
    getUser(): void {
        this.userService.getUser(this.str2)
            .subscribe(users => this.users = users);
    }

    order() {
        this.onClear();

        window.alert('Twoje zamówienie zostało przekazane do działu administracji.');
    }
}

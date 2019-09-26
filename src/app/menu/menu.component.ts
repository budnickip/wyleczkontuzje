import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  dataset = ['kolano', 'udo', 'obszerny-boczny', 'Framework', 'SPA', 'React', 'Vue'];
  constructor() { }

  ngOnInit() {
  }

}

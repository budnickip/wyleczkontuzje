import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  dataset = ['kolano', 'udo', 'obszerny-boczny', 'pośladkowy-wielki', 'wiązadła-krzyżowe', 'trójgłowy', 'łydka'];
  constructor(public cookiesService: CookiesService) { }



  ngOnInit() {
  }

  public logout(): void {
    window.alert('Zostałeś poprawnie wylogowany');
    this.cookiesService.delete('token');
  }

}

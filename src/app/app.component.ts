import { Component } from '@angular/core';
import { faShopping } from '@fortawesome/free-solid-svg-icons';
import { f167 } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faShopping = faShopping;
  faYoutube = f167;
  title = 'Aplikacja pierwszej pomocy dla osób kontuzjowanych';
}

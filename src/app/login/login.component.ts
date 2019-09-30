import { Component, OnInit } from '@angular/core';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookiesService: CookiesService) { }

  ngOnInit() {
  }

  public toLogin(): void {
    this.cookiesService.set('token', 'qweqweqwe');
  }
}

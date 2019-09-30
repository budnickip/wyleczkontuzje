import { Component, OnInit } from '@angular/core';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private cookiesService: CookiesService) { }

  ngOnInit() {
  }
  public getInjury(): void {
    this.cookiesService.get('obszerny');
  }
}

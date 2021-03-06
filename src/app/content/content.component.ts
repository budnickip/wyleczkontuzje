import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public goTo(link: string): void{
    this.router.navigate([link]);
  }
}

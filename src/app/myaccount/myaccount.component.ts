import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
    user: User;
    users: User[];
    str2 = this.cookiesService.get('token').slice(0, this.cookiesService.get('token').indexOf('@'));
    constructor(private cookiesService: CookiesService,
        private userService: UserService ) { }

    ngOnInit() {
        this.getUser();
  }
  public getInjury(): void {
    this.cookiesService.get('obszerny');
  }
    //this.cookiesService.get('token')
   

    getUser(): void {
        this.userService.getUser(this.str2)
            .subscribe(users => this.users = users);
    }


}

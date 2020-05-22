import { Component, OnInit, Input } from '@angular/core';
import { FLOSS, BAND, BALL, MAT, ROLLER } from '../mock-product';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { User } from '../user'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User;
  floss = FLOSS;
  band = BAND;
  ball = BALL;
  mat = MAT;
  roller = ROLLER;
  emailn: string;
  passwordn: string;
  users: User[];
    usernew: User;
    addUser: User = {
        email: '',
        password: ''
    };
  constructor(private userService: UserService,
              private location: Location) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
      console.log('addUser', this.addUser);
      this.userService.addUser(this.addUser)
          .subscribe((usernew: User) => {
        this.users.push(usernew);
      });
  }

  save(user: User): void {
    console.log(user);
      this.userService.updateUser(user).subscribe((data: any) => {
      });

   }

    delete(userIdx: number): void {
        let user = this.users[userIdx];
        console.log('user', user);
       this.userService.deleteUser(user.id).subscribe(() => {
           console.log('ok');
           this.users.splice(userIdx, 1);
       });
  }

}

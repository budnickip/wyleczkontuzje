import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private cookiesService: CookiesService,
        private userService: UserService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createForm();
  }

    public toLogin(): void {
        this.cookiesService.delete('token');
      this.userService.getUsers().subscribe((results: User[]) => {
          for (let user of results) {
              if (user.email === this.loginForm.value['email'] && user.password === this.loginForm.value['password']) {
                  this.cookiesService.set('token', 'qweqweqwe');
                  console.log('poprawnie zalogowano użytkownika');
              }
          }

          if (!this.cookiesService.check('token')) console.error('błędne dane logowania');
      });
  }

    private createForm(): void {
        this.loginForm = this.formBuilder.group({
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }
}

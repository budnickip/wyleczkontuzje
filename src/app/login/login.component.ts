import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    loginError;

    constructor(private cookiesService: CookiesService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private location: Location) { }

    ngOnInit() {
        this.createForm();
  }

    public toLogin(): void {
        this.cookiesService.delete('token');
        this.loginError = document.getElementById('loginError');
        this.loginError.innerHTML = '';
      this.userService.getUsers().subscribe((results: User[]) => {
          for (let user of results) {
              if (user.email === this.loginForm.value['email'] && user.password === this.loginForm.value['password']) {
                  this.cookiesService.set('token', user.email);
                  console.log('poprawnie zalogowano użytkownika');
                  window.alert('Witamy, proces logowania przebiegł pomyślnie.');
                  console.log(this.cookiesService.get('token'));
                  this.location.back();
              }
          }

          if (!this.cookiesService.check('token')) {
              this.loginError.innerHTML = 'Niepoprawne dane logowania';
              console.error('Niepoprawne dane logowania')
          };
      });
  }

    private createForm(): void {
        this.loginForm = this.formBuilder.group({
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }
}

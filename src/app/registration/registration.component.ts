import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
    public registrationForm: FormGroup;
    private readonly regexpEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    passwordRegex = new RegExp("^((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))");
    postalCodeRegex = new RegExp("^\\d{2}[-]{1}\\d{3}$");


    name;
    bladName;
    errName;
    password;
    bladPassword;
    errPassword;
    password2;
    bladPassword2;
    errPassword2;
    lastname;
    bladLastname;
    errLastname;
    city;
    bladCity;
    errCity;
    postalcode;
    bladPostalCode;
    errPostalCode;

  constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
        ) { }

    ngOnInit() {
        this.createForm();
  
    }

    public register(): void {
        console.log('registrationForm', this.registrationForm.value);
        this.userService.addUser(<User>this.registrationForm.value).subscribe((data: User) => {
            window.alert('Rejestracja przebiegła pomyślnie! Użyj swoich danych do zalogowania się');
        });
        this.router.navigate(['/content']);
    }

    private createForm(): void {
        this.registrationForm = this.formBuilder.group({
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        }, {
                validator: Validators.compose([
                    this.emailValidate('email')
                ])
        });
    }

    private emailValidate(emailProp: string) {
        return (group: FormGroup): { [key: string]: any } => {
            if (this.regexpEmail) {
                let email = group.controls[emailProp];
                let checkedEmail = this.regexpEmail.test(String(email.value).toLowerCase());

                if (!checkedEmail && email.value.length > 0) {
                    return {
                        emailNotValidate: true
                    }
                }
            }
        }
    }

 

    walidacjaImie() {

        this.name = document.getElementById('name');
        this.bladName = document.getElementById('imieError');
        this.errName = '';
        if (this.name.value == '') {
            this.errName = '';
        }

        if (this.name.value.length < 3) {
            if (this.errName == '') this.errName = 'Imie musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.name.value))
            if (this.errName == '') this.errName = 'Imie może składać się tylko z liter';
        this.bladName.innerHTML = this.errName;
    }

    walidacjaHaslo() {
        this.password = document.getElementById('password');
        this.bladPassword = document.getElementById('passwordError');
        this.errPassword = '';

        if (this.password.value == '') {
            this.errPassword = 'Pole nie może być puste';
        }

        if (this.password.value.length < 8) {
           if (this.errPassword == '') this.errPassword = 'Hasło musi zawierać conajmniej 8 znaków';
        }

        if (!this.passwordRegex.test(this.password.value)) {
            if (this.errPassword == '') this.errPassword = 'Hasło musi zawierać conajmniej 8 znaków w tym jedną cyfrę ';
        }
        this.bladPassword.innerHTML = this.errPassword;
    }

    walidacjaPowtorzHaslo() {
        this.password = document.getElementById('password');
        this.password2 = document.getElementById('password2');
        this.bladPassword2 = document.getElementById('repeatPasswordError');
        this.errPassword2 = '';

        if (this.password2.value != this.password.value) {
            this.errPassword2 = 'Hasła różnią się od siebie';
        }

        this.bladPassword2.innerHTML = this.errPassword2;
    }

    walidacjaNazwisko() {

        this.lastname = document.getElementById('lastname');
        this.bladLastname = document.getElementById('nazwiskoError');
        this.errLastname = '';
        if (this.lastname.value == '') {
            this.errLastname = '';
        }

        if (this.lastname.value.length < 3) {
            if (this.errLastname == '') this.errLastname = 'Nazwisko musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.lastname.value))
            if (this.errLastname == '') this.errLastname = 'Nazwisko może składać się tylko z liter';
        this.bladLastname.innerHTML = this.errLastname;
    }

    walidacjaMiasto() {

        this.city = document.getElementById('city');
        this.bladCity = document.getElementById('cityError');
        this.errCity = '';
        if (this.city.value == '') {
            this.errCity = '';
        }

        if (this.city.value.length < 3) {
            if (this.errCity == '') this.errCity = 'Nazwa miasta musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.city.value))
            if (this.errCity == '') this.errCity = 'Nazwa miasta może składać się tylko z liter';
        this.bladCity.innerHTML = this.errCity;
    }

    walidacjaKodPocztowy() {
        this.postalcode = document.getElementById('postalcode');
        this.bladPostalCode = document.getElementById('postalCodeError');
        this.errPostalCode = '';

        if (!this.postalCodeRegex.test(this.postalcode.value)) {
            if (this.errPostalCode == '') this.errPostalCode = 'Nieprawidłowy kod pocztowy';
        }

        this.bladPostalCode.innerHTML = this.errPostalCode;
    }

}

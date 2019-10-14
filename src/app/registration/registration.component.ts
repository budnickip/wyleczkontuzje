import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

    constructor(private formBuilder: FormBuilder,
        private userService: UserService) { }

    ngOnInit() {
        this.createForm();
    }

    public register(): void {
        console.log('registrationForm', this.registrationForm.value);
        this.userService.addUser(<User>this.registrationForm.value).subscribe((data: User) => {
            console.log('data', data);
        });
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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';



@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm extends FormBase implements OnInit {


  constructor(formBuilder: FormBuilder, fms: FormMessagesService) {
    super(fms);
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    });
  }

  public onSave() {
    const {email, password} = this.form.value;
    const login = {email, password};
    console.warn('Send Login', login);
  }


  ngOnInit(): void {
  }

}

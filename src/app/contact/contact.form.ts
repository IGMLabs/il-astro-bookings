import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Contact{
  name:string;
  email:string;
  message:string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm implements OnInit {

  public form:FormGroup;

  constructor(formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      message:new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    });
  }

  ngOnInit(): void {}

  public hasError(controlName:string){
    const control = this.getcontrol(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName:string){
    const control = this.getcontrol(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName:string):string{
    const control = this.getcontrol(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors= control.errors;
    let errorMessage= '';
    errorMessage += errors['required']?'💥Field is required':'';
    errorMessage += errors['email']?'💥Should be an email address':'';
    errorMessage += errors['minlength']?`💥More than ${errors["minlength"].requiredLength} chars`:'';
    errorMessage += errors['maxlength']?`💥Less than ${errors["maxlength"].requiredLength} chars`:'';

    return errorMessage;
  }

  public onSave(){
    const contact= this.form.value;
    console.warn('Send contact Message',contact);
  }
  public getcontrol(controlName: string): AbstractControl | null{
    return this.form.get(controlName);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-registration-form-builder',
  templateUrl: './registration-form-builder.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class RegistrationFormBuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  registrationForm=this.fb.group({name:['ravi',Validators.required]})
  ngOnInit(): void {
  }
  onSubmit(){

    console.log("value",this.registrationForm.value)
  }

}

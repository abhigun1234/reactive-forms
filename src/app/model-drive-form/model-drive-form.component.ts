import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-drive-form',
  templateUrl: './model-drive-form.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class ModelDriveFormComponent implements OnInit {
  registrationForm=new FormGroup({name:new FormControl('abhishek',Validators.required)})
  constructor() { }

  ngOnInit(): void {
  }
  submit(){

    console.log("registrationForm=val",this.registrationForm.value)
  }
}

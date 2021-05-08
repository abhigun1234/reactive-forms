import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm=new FormGroup({name:new FormControl(),
  phoneno:new FormControl(),city:new FormControl(),
  country:new FormControl(),
  email:new FormControl(),birthday:new FormControl()})
  constructor() { }


  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.registrationForm.value)
  }

}

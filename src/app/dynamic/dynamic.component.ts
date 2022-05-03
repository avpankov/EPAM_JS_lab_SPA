import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  form!: FormGroup;
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, this.checkPasswordLength]),
    })
  }

  onSubmit() {
    console.log('Submitted!', this);
  }

  checkPasswordLength(control: FormControl) {
    if (control.value.length > 0 && control.value.length < 4) {
      return {
        'lengthError': true,
      };
    } 
    return null;
  }

  logIn() {
    this.isLoggedIn = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: [null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)]
        )]
    });
  }

  login() {
    console.log(this.loginForm.controls['userName'].value);
  }

  ngOnInit() {
  }

}

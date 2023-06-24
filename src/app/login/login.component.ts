import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm! : FormGroup;
  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
    this.loginForm = this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
        const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
        if (isUserExist != undefined) {
          alert('User Login Successfully');
          // this.loginForm.reset();
          this.router.navigate(['user-list']);
        } else {
          alert('Wrong credentials');
        }
   
  }}
//   onLogin() {
//       const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
//       if (isUserExist != undefined) {
//         alert('User Login Successfully');
        
//       } else {
//         alert('Wrong credentials');
//       }
//     }
 
// }


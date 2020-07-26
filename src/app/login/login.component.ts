import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isInvalidForm: boolean;
  isMatchedUsername_Password: boolean;
  usernamePasswordInvalidMsg: string;
  usernamePasswordErrorMsg: string;
  userLoged: any = [];
  finalObj:any=[];

  constructor(public loginPage: FormBuilder, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.loginForm = this.loginPage.group({
      email: ['', Validators.required],
      Password: ['', Validators.required]
    });
    this.userLoged = (JSON.parse(localStorage.getItem("signUpData")) || [ ]);
  }

  onSubmit() {
    this.isInvalidForm = true;
    let email = this.loginForm.value.email;
    let pass = this.loginForm.value.Password;
    this.finalObj = (this.userLoged.filter(item => {
     return item.email == email && item.password == pass;
    })[0]  || {});

    if (this.loginForm.invalid) {
      return;
    }else if(this.finalObj.email == email && this.finalObj.password == pass){
      localStorage.setItem('userData',JSON.stringify(this.finalObj));
      // Swal.fire('success');
      this.toastr.success('success','Hello world!');
      this.router.navigate(['dashboard']);
    }else{
      // Swal.fire('Oops...', 'Something went wrong!', 'error')
      this.toastr.error('error','please inter valid data!');
    }

  }
}

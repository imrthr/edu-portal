import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;
	isInvalidForm:boolean;
	isMatchedPassword:boolean;
	passwordErrorMsg:string;
	formDataArray:any = [];
	formObject:any = [];
	signUpFormData:string;

  constructor(public formBuilder:FormBuilder,
	private router:Router,) { }

  ngOnInit(): void {
  	this.signUpForm = this.formBuilder.group({
  		name:['', Validators.required],
  		phone:['',Validators.required],
  		email:['',Validators.required],
		password: ['',Validators.required],
		confirmPassword: ['',Validators.required] 
		});
		
	this.formDataArray = (JSON.parse(localStorage.getItem("signUpData")) || []);
	}
// get formLoginFormData(){
// 	return this.signUpForm.controls;	
// }
onSubmit() {
	this.isInvalidForm = true;
	if(this.signUpForm.invalid ){
		return;
		}else if(this.signUpForm.value.password != this.signUpForm.value.confirmPassword){
	    this.isMatchedPassword=true;
		this.passwordErrorMsg="Password & Confirm Password does not match."
		return;
	}else{
		this.isInvalidForm = false;
		this.passwordErrorMsg='';
		this.formObject = this.signUpForm.value;
		// this.formObject.createdOn = new Date();
		this.formObject['createdDate'] = new Date().toString( );
		console.log(this.formObject);
		this.formDataArray.push(this.formObject);
		console.log(this.formDataArray);
		localStorage.setItem('signUpData',JSON.stringify(this.formDataArray));
		this.signUpForm.reset();
		this.router.navigate(['/']);
	}
}
onView(signUpFormData){
	console.log(signUpFormData);

this.signUpForm.controls['name'].setValue(signUpFormData.name);
this.signUpForm.controls['phone'].setValue(signUpFormData.phone);
this.signUpForm.controls['email'].setValue(signUpFormData.email);
this.signUpForm.disable();
}
onDelete(currentObject,currentIndex){
	console.log(currentIndex);
	this.formDataArray.splice(currentIndex,1);
	
}

}

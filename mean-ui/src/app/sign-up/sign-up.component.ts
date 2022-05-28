import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';
import { SignupModel } from '../service/signup-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  signUpModelObj: SignupModel = new SignupModel();
  firstName: any;
  lastName: any;
  email: any;
  mobileNo: any;
  address: any;
  password: any;
  cpassword: any;
  constructor(private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: [' ' ,Validators.required],
      lastName: [' ' ,Validators.required],
      email: [' ' ,Validators.required],
      mobileNo: [' ' ,Validators.required],
      address: [' ' ,Validators.required],
      password: [' ' ,Validators.required],
      cpassword: [' ' ,Validators.required],
    });
  }
  postSignupForm() {
    console.log(this.signupForm);
    this.signUpModelObj.firstName = this.signupForm.value.firstName;
    this.signUpModelObj.lastName = this.signupForm.value.lastName;
    this.signUpModelObj.email = this.signupForm.value.email;
    this.signUpModelObj.mobileNo = this.signupForm.value.mobileNo;
    this.signUpModelObj.address = this.signupForm.value.address;
    this.signUpModelObj.password = this.signupForm.value.password;
    this.signUpModelObj.cpassword = this.signupForm.value.cpassword;
    this.signUpService.postSignUpDetails(this.signUpModelObj).subscribe(result => {
      alert("SignUp Record Added Successfully!");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, (err) => {
      alert("Something Wrong in Saving SignUp Details");
    });

    // if (this.signupForm.valid) {
    // }
    // else {

    //   let key = Object.keys(this.signupForm.controls);
    //   key.filter(data => {
    //     let control = this.signupForm.controls[data];
    //     if (control.errors != null) {
    //       control.markAsTouched();
    //     }
    //   })
    // }
  }
  resetSignUpForm() {
    this.signupForm.reset();
  }
  allowedOnlyNo(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  allowOnlyAlphabets(event: any) {
    const pattern = /[a-zA-Z\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  allowOnlyAlphabetsandDot(event: any) {
    const pattern = /[a-zA-Z\+\-\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  preventApostrophe(event: any) {
    if (event.charCode === 39) {
      event.preventDefault();
    }
  }
  preventDoubleSpace(event: any, inputValue: any) {
    const lastEnterCharacter = inputValue.substr(inputValue.length - 1, inputValue.length);
    if (event.charCode === 32 && lastEnterCharacter === '') {
      event.preventDefault();
    }
  }

  allowNumbersAndAlphabets(event: any) {
    const pattern = /[a-z A-Z 0-9 \&\$\@\#\%\* ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validateEmail(email: any) {
    // const pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.]))
    const emailPattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    return emailPattern.test(String(email).toLowerCase());
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  allowNumbersAndHypen(event: any) {
    const pattern = /[0-9 \-\&\$\@\#\%\* ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  userNameValidation() {
    // let userName = document.getElementById('firstName').value;
    const userPattern = /^[A-Za-z .]{3,20}$/;
    const emailPattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const mobilePattern = /^[0-9]{10}$/;
    const indiaMobilePattern = /^[789][0-9]{9}$/;
    // if (userPattern.test(userName)) {
    //   document.getElementById('firstName').style.backgroundColor = 'green';
    // document.getElementById('firstName').innerHTML ="Email Id is Correct";
    // } else {
    //   document.getElementById('firstName').style.backgroundColor = 'red';
    // document.getElementById('firstName').innerHTML ="Email Id is Not Correct";
    // }
    if (this.firstName == undefined || this.firstName == null || this.firstName.length === 0) {
      alert("Please Enter First Name");
      // return false;
    }
    if (this.lastName == undefined || this.lastName == null || this.lastName.length === 0) {
      alert("Please Enter Last Name");
      // return false;
    }
    if (this.email == undefined || this.email == null || this.email.length === 0) {
      alert("Please Enter Email");
      // return false;
    }
    if (this.mobileNo == undefined || this.mobileNo == null || this.mobileNo.length === 0) {
      alert("Please Enter Mobile No");
      // return false;
    }
    if (this.address == undefined || this.address == null || this.address.length === 0) {
      alert("Please Enter Permanent Address");
      // return false;
    }
    if (this.password == undefined || this.password == null || this.password.length === 0) {
      alert("Please Enter Password");
      // return false;
    }
    if (this.cpassword == undefined || this.cpassword == null || this.cpassword.length === 0) {
      alert("Please Enter Valid Password");
      // return false;
    }
  }
}

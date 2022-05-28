import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';
import { SignupModel } from '../service/signup-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signUpDetails: any = [];
  signUpList: any = [];
  signpass: any;
  signemail: any;
  constructor(private fb: FormBuilder, private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  postLoginForm() {
    this.signUpService.getAllSignUpDetails().subscribe(result => {
      this.signUpDetails = result;
      this.signUpList = this.signUpDetails['results'];
      // const User = this.signUpList.find((a: any) => {
      //   if (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password) {
      //     alert("login Successfully!");
      //     this.loginForm.reset();
      //     this.router.navigate(['hotel-management/hotel-dashboard']);
      //   }
      //   else {
      //     alert("You Are Entered Wrong Credential!")
      //   }
      // });
      console.log(this.signUpList);
      this.signemail=this.signUpList.email;
      this.signpass=this.signUpList.password;
      console.log(this.signemail);
      console.log(this.signpass);
    });
  }
  // postLoginForm() {
  // this.signUpModelObj.email = this.loginForm.value.email;
  // this.signUpModelObj.password = this.loginForm.value.password;
  //  this.signUpService.postSignUpDetails(this.signUpModelObj).subscribe(result=>[
  //    const User = result.find((a:any)=>{
  //      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //    })
  //    if(User){
  //      alert("Login Successfully!");
  //      this.loginForm.reset();
  //      this.router.navigate(['hotel-management/hotel-dashboard']);
  //    }
  //    else{
  //      alert('Credential Error');
  //    }
  //  ])
  // }

  resetLoginForm() {
    this.loginForm.reset();
  }
}

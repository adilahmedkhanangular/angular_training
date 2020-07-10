import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      email: [
        null, 
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.max(10), Validators.min(6)]),        
      ]
    });
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.loginForm.markAllAsTouched();    
console.log(this.loginForm.value);
    if(this.loginForm.valid){
      
      if(this.loginForm.value.email == "admin@admin.com" && this.loginForm.value.password == "admin@12345") {
        this.loginForm.reset();
        this.router.navigate(['/Home']);
      } else {
        console.log('Invalid Credential');
      }

    } else {
      console.log('Error Occured');
    }

    //this.router.navigate(['/Home', 5])
    
  }

}

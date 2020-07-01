import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {

  lblEmail = "Email Address";
  lblPassword = "Password";
  lblSignIn = "Sign in";
  
  PageLifeCycle = "";

  constructor() { }

  ngOnInit(): void {
    this.PageLifeCycle += "<p>ngOnInit Called</p>";
  }

  ngAfterViewInit(): void{
    this.PageLifeCycle += "<p>ngAfterViewInit Called </p>";
  } 

  PrintName() {
    console.log("Adil Ahmed Khan");
  }
}

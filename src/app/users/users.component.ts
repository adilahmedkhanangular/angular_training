import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }

  students = [
    {firstName: "Adil", lastName: "Khan", age: 17, department: "Department 1", date: new Date()},
    {firstName: "Shayan", lastName: "Khan", age: 17, department: "Department 1", date: new Date()},
    {firstName: "Akbar", lastName: "Khan", age: 17, department: "Department 1", date: new Date()},
    {firstName: "Arif", lastName: "Khan", age: 17, department: "Department 1", date: new Date()},
    {firstName: "Umer", lastName: "Khan", age: 17, department: "Department 1", date: new Date()}
  ];

  ngOnInit(): void {
   
  }

  redirectToDetail(student) {    
    this.router.navigate(['/User', student]);
  }

}

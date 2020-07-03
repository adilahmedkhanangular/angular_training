import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  students = [
    { firstName: "First Name 1", lastName: "Last Name 1", age: 15, department: "Department 1"},
    { firstName: "First Name 2", lastName: "Last Name 2", age: 16, department: "Department 2"},
    { firstName: "First Name 3", lastName: "Last Name 3", age: 17, department: "Department 3"},
    { firstName: "First Name 4", lastName: "Last Name 4", age: 18, department: "Department 4"},
    { firstName: "First Name 5", lastName: "Last Name 5", age: 19, department: "Department 5"},
    { firstName: "First Name 6", lastName: "Last Name 6", age: 20, department: "Department 6"}
  ];

  firstName: string;
  lastName: string;
  age: number;
  department: string;
  isDataSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  populateDetailForm(i){    
    this.isDataSelected = true;

    this.firstName = this.students[i].firstName;
    this.lastName = this.students[i].lastName;
    this.age = this.students[i].age;
    this.department = this.students[i].department;
  }

}

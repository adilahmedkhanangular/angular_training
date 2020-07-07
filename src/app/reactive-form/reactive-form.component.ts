import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
  //styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  students = [];
  studentForm: FormGroup;
  showAddStudent = false;
  Departments: any = ['Department 1', 'Department 2', 'Department 3', 'Department 4', 'Department 5']

  constructor(private fb: FormBuilder) { 
    this.studentForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      age: [
        null,
        Validators.compose([Validators.required, Validators.max(20), Validators.min(10)]),        
      ],
      department: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      above18: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  AddStudent(){
    this.showAddStudent = true;
  }

  Submit(){
    this.studentForm.markAllAsTouched();    

    if(this.studentForm.valid){
      this.students.push({
        firstName: this.studentForm.value.firstName,
        lastName: this.studentForm.value.lastName,
        age: this.studentForm.value.age,
        department: this.studentForm.value.department,
        date: this.studentForm.value.date,
        time: this.studentForm.value.time,
        above18: this.studentForm.value.above18
      });

      this.studentForm.reset();

    } else {
      console.log('Error Occured');
    }

  }
}
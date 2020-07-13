import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user.model';
import { AddUser } from 'src/app/model/adduser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User;
  userAddForm: FormGroup;
  userAdd: AddUser;

  constructor(private router: Router, 
    private userService: UserService,
    private fb: FormBuilder) {       
      this.users = new User();
      this.userAddForm = this.fb.group({
        name: [null, Validators.required],
        job: [null, Validators.required]
      });
  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  redirectToDetail(id) {    
    this.router.navigate(['/User', id]);
  }

  getUsers() {
    this.userService.getUser().subscribe((res: any) => {
      this.users = res.data;
    });
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe((res: any) => {
      console.log(res);
    });
  }

  updateUser(id){

  }

  getUserById(id: number){
    this.userService.getUserById(id).subscribe((res: any) => {
      this.userAdd = res.data;
      console.log(this.userAdd);
    });   
  }

  addUser(){
    this.userAddForm.markAllAsTouched();    

    if(this.userAddForm.valid){

      this.userAdd = new AddUser();
      this.userAdd.name = this.userAddForm.value.name;
      this.userAdd.job = this.userAddForm.value.job;

      this.userService.addUser(this.userAdd).subscribe((res: any) => {
        console.log(res);
      });      

      this.userAddForm.reset();

    } else {
      console.log('Invalid Form: Error Occured');
    }
  }
}
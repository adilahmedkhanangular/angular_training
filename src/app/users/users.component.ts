import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user.model';
import { AddUser } from 'src/app/model/adduser.model';
import { EditUser } from 'src/app/model/edituser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = []
  userAdd: AddUser;
  userEdit: EditUser;
  editId: number;

  userAddForm: FormGroup;
  userEditForm: FormGroup;

  isShowAddUserForm = false;
  isShowEditUserForm = false;

  constructor(private router: Router,
    private userService: UserService,
    private fb: FormBuilder) {    
    this.userAddForm = this.fb.group({
      name: [null, Validators.required],
      job: [null, Validators.required]
    });

    this.userEditForm = this.fb.group({
      name: ["", Validators.required],
      job: ["", Validators.required],
      id: [""]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  redirectToDetail(id) {
    this.router.navigate(['/User', id]);
  }

  showAddUserForm() {
    this.isShowAddUserForm = true;
    this.isShowEditUserForm = false;
  }

  getUsers() {
    this.userService.getUser().subscribe((res: any) => {
      this.users = res.data;
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((res: any) => {
      console.log(res);
    });
  }

  updateUser(event) {
    console.log(event.target.value);

this.userEditForm.markAllAsTouched();

    if (this.userEditForm.valid) {

      this.userEdit = new EditUser();
      this.userEdit.id = this.userEditForm.value.id;
      this.userEdit.name = this.userEditForm.value.name;
      this.userEdit.job = this.userEditForm.value.job;

      this.userService.updateUser(this.userEdit).subscribe((res: any) => {
        console.log(res);
      });

      this.userEditForm.reset();

    } else {
      console.log('Invalid Form: Error Occured');
    }
  }

  getUserById(id: number) {

    this.isShowAddUserForm = false;
    this.isShowEditUserForm = true;
    this.userService.getUserById(id).subscribe((res: any) => {
      this.userEditForm = this.fb.group({
        name: [res.data.first_name, Validators.required],
        job: [res.data.last_name, Validators.required],
        id: [res.data.id]
      });

      this.editId = res.id;
    });
  }

  addUser() {
    this.userAddForm.markAllAsTouched();

    if (this.userAddForm.valid) {

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
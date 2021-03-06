import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() users: Array<User> = [];

  constructor() { }

  ngOnInit(): void {

  }

}
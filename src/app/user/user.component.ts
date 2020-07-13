import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"
import { UserService } from '../user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute, 
    private userService: UserService) { 
      this.user = new User();
    }    

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res: any) => {
      const id = res.params.id;
      this.getUserById(id);
  });
  }

  getUserById(id: number){
    this.userService.getUserById(id).subscribe((res: any) => {
      this.user = res.data;
    });   
  }

}
